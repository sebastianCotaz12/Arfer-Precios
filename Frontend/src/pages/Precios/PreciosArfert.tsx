import { useState, useEffect, useCallback } from 'react'
import { getCostos, updateCosto } from '../../api'
import type { CostoProducto } from '../../api'
import TablaArfert from '../../components/TablaArfert'

export default function PreciosArfert() {
  const [costos, setCostos] = useState<CostoProducto[]>([])
  const [editados, setEditados] = useState<Record<number, number>>({})
  const [factoresEditados, setFactoresEditados] = useState<Record<number, number>>({})
  const [loading, setLoading] = useState(true)
  const [guardando, setGuardando] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(() => {
    getCostos()
      .then(data => setCostos(data))
      .finally(() => setLoading(false))
  }, [])

  const mostrarToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  const handleCostoChange = (id: number, valor: number) => {
    setEditados(prev => ({ ...prev, [id]: valor }))
  }

  const handleFactorChange = (id: number, valor: number) => {
    setFactoresEditados(prev => ({ ...prev, [id]: valor }))
  }

  const guardar = useCallback(async () => {
    const idsEditados = new Set([
      ...Object.keys(editados).map(Number),
      ...Object.keys(factoresEditados).map(Number)
    ])

    if (idsEditados.size === 0) return
    setGuardando(true)

    try {
      await Promise.all(
        Array.from(idsEditados).map(id => {
          const productoCosto = editados[id]
          const factor = factoresEditados[id]
          return updateCosto(id, productoCosto, factor)
        })
      )

      setCostos(prev => prev.map(cp => ({
        ...cp,
        presentaciones: cp.presentaciones.map(p => {
          const nuevoCosto = editados[p.id] ?? p.productoCosto
          const nuevoFactor = factoresEditados[p.id] ?? p.factor
          const total = p.envases + p.etiqueta + p.caja + p.flete + nuevoCosto
          return { ...p, productoCosto: nuevoCosto, factor: nuevoFactor, total }
        })
      })))

      setEditados({})
      setFactoresEditados({})
      mostrarToast('✅ Costos guardados — precios de distribución actualizados')
    } catch {
      mostrarToast('❌ Error al guardar')
    } finally {
      setGuardando(false)
    }
  }, [editados, factoresEditados])

  const hayEdiciones = Object.keys(editados).length > 0 || Object.keys(factoresEditados).length > 0

  if (loading) {
    return <div className="py-20 text-center text-gray-400 text-sm">Cargando costos...</div>
  }

  return (
    <div>
      <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-xs text-yellow-800 font-medium">
        💡 Editá el costo de <strong>Producto</strong> y/o el <strong>Factor</strong> — el precio de distribución se recalcula automáticamente.
      </div>

      <TablaArfert
        costos={costos}
        editados={editados}
        factoresEditados={factoresEditados}
        onCostoChange={handleCostoChange}
        onFactorChange={handleFactorChange}
      />

      <div className="flex justify-end gap-3 mt-6">
        {hayEdiciones && (
          <button
            onClick={() => { setEditados({}); setFactoresEditados({}) }}
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
          {guardando ? 'Guardando...' : '💾 Guardar costos'}
        </button>
      </div>

      {toast && (
        <div className="fixed bottom-6 right-6 bg-[#1a3f22] text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-xl z-50">
          {toast}
        </div>
      )}
    </div>
  )
}