import { useState, useEffect, useCallback } from 'react'
import { getZonas, getProductos, bulkUpdate } from '../../api'
import type { Zona, Producto } from '../../api'
import ZonaPills from '../../components/ZonaPills'
import TablaPrecios from '../../components/TablaPrecios'
import { generarPDF } from '../../components/PdfGenerator'

function hoy() {
  return new Date().toLocaleDateString('es-CO', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  })
}

export default function Precios() {
  const [zonas, setZonas] = useState<Zona[]>([])
  const [zonaActual, setZonaActual] = useState('')
  const [productos, setProductos] = useState<Producto[]>([])
  const [editados, setEditados] = useState<Record<number, number>>({})
  const [loading, setLoading] = useState(false)
  const [guardando, setGuardando] = useState(false)
  const [toast, setToast] = useState('')
  const [cliente, setCliente] = useState('Distribuidora')
  const fecha = hoy()

  useEffect(() => {
    getZonas().then(data => {
      setZonas(data)
      if (data.length > 0) setZonaActual(data[0].nombre)
    })
  }, [])

  useEffect(() => {
    if (!zonaActual) return
    setLoading(true)
    setEditados({})
    getProductos(zonaActual)
      .then(data => setProductos(data.productos))
      .finally(() => setLoading(false))
  }, [zonaActual])

  const mostrarToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  const handlePrecioChange = (id: number, valor: number) => {
    setEditados(prev => ({ ...prev, [id]: valor }))
  }

  const handleZonaChange = (nombre: string) => {
    setZonaActual(nombre)
  }

  const guardar = useCallback(async () => {
    if (Object.keys(editados).length === 0) return
    setGuardando(true)
    try {
      const payload = Object.entries(editados).map(([id, precio]) => ({
        id: Number(id), precio
      }))
      await bulkUpdate(zonaActual, payload)
      setProductos(prev =>
        prev.map(p => editados[p.id] !== undefined ? { ...p, precio: editados[p.id] } : p)
      )
      setEditados({})
      mostrarToast('✅ Precios guardados correctamente')
    } catch {
      mostrarToast('❌ Error al guardar')
    } finally {
      setGuardando(false)
    }
  }, [editados, zonaActual])

  const handlePDF = () => {
    generarPDF(productos, editados, zonaActual, cliente, fecha)
  }

  const hayEdiciones = Object.keys(editados).length > 0

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">

      <ZonaPills
        zonas={zonas}
        zonaActual={zonaActual}
        onZonaChange={handleZonaChange}
      />

      {/* META */}
      <div className="flex gap-4 mb-5 flex-wrap">
        <div>
          <div className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-wider mb-1">Cliente</div>
          <input
            value={cliente}
            onChange={e => setCliente(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-[#2d7a3a] min-w-48"
          />
        </div>
        <div>
          <div className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-wider mb-1">Fecha</div>
          <div className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm bg-gray-50 text-gray-500">
            {fecha}
          </div>
        </div>
      </div>

      {/* HEADER TABLA */}
      <div className="bg-[#2d7a3a] px-5 py-3 flex items-center justify-between rounded-t-xl">
        <h2 className="text-white text-xs font-semibold uppercase tracking-widest">
          Productos · Precios 2026
        </h2>
        <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {zonaActual}
        </span>
      </div>

      <TablaPrecios
        productos={productos}
        editados={editados}
        onPrecioChange={handlePrecioChange}
        loading={loading}
      />

      {/* ACCIONES */}
      <div className="flex justify-end gap-3 mt-4">
        {hayEdiciones && (
          <button
            onClick={() => setEditados({})}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition"
          >
            ↺ Descartar
          </button>
        )}
        <button
          onClick={guardar}
          disabled={!hayEdiciones || guardando}
          className={`px-5 py-2 text-sm font-semibold rounded-lg transition ${
            hayEdiciones
              ? 'bg-[#2d7a3a] text-white hover:bg-[#235f2e]'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          {guardando ? 'Guardando...' : '💾 Guardar'}
        </button>
        <button
          onClick={handlePDF}
          className="px-5 py-2 text-sm font-semibold rounded-lg bg-[#2d7a3a] text-white hover:bg-[#235f2e] transition"
        >
          ⬇ PDF
        </button>
      </div>

      {/* TOAST */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-[#1a3f22] text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-xl z-50">
          {toast}
        </div>
      )}
    </div>
  )
}
