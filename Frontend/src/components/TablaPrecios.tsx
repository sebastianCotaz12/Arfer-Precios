import type { Producto } from '../api'

interface Props {
  productos: Producto[]
  editados: Record<number, number>
  onPrecioChange: (id: number, valor: number) => void
  loading: boolean
}

function fmt(n: number) {
  return '$ ' + Math.round(n).toLocaleString('es-CO')
}

export default function TablaPrecios({ productos, editados, onPrecioChange, loading }: Props) {
  const getPrecio = (p: Producto) => editados[p.id] ?? p.precio
  const getPrecioA = (p: Producto) => {
    const precio = getPrecio(p)
    return p.factor > 0 ? Math.round(precio / p.factor) : 0
  }

  let grupoActual = ''

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm py-16 text-center text-gray-400 text-sm">
        Cargando productos...
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#f0f7f1] text-[#27500a] text-xs font-semibold uppercase tracking-wide">
            <th className="px-4 py-2.5 text-left">Producto</th>
            <th className="px-4 py-2.5 text-left">Presentación</th>
            <th className="px-4 py-2.5 text-right">Precio base</th>
            <th className="px-4 py-2.5 text-center">Factor</th>
            <th className="px-4 py-2.5 text-right">Precio A</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(p => {
            const esNuevoGrupo = p.grupo !== grupoActual
            if (esNuevoGrupo) grupoActual = p.grupo
            return (
              <>
                {esNuevoGrupo && (
                  <tr key={`g-${p.grupo}-${p.id}`} className="bg-[#f7fbf7]">
                    <td colSpan={5} className="px-4 py-1.5 text-xs font-bold text-[#2d7a3a] uppercase tracking-wide">
                      {p.grupo}
                    </td>
                  </tr>
                )}
                <tr key={p.id} className="border-t border-gray-50 hover:bg-gray-50 transition">
                  <td className="px-4 py-2 font-medium text-gray-800">{p.producto}</td>
                  <td className="px-4 py-2">
                    <span className="bg-gray-100 border border-gray-200 text-gray-500 text-xs px-2 py-0.5 rounded-full">
                      {p.und}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-right">
                    <input
                      type="number"
                      value={getPrecio(p)}
                      onChange={e => onPrecioChange(p.id, Number(e.target.value))}
                      className="w-28 text-right border-b border-dashed border-gray-300 bg-transparent text-[#2d7a3a] font-semibold outline-none focus:border-[#2d7a3a] py-0.5"
                    />
                  </td>
                  <td className="px-4 py-2 text-center text-gray-400 text-xs">{p.factor.toFixed(2)}</td>
                  <td className="px-4 py-2 text-right text-[#2d7a3a] font-bold">
                    {getPrecioA(p) > 0 ? fmt(getPrecioA(p)) : '–'}
                  </td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}