import type { CostoProducto } from '../api'

interface Props {
  costos: CostoProducto[]
  editados: Record<number, number>
  factoresEditados: Record<number, number>
  onCostoChange: (id: number, valor: number) => void
  onFactorChange: (id: number, valor: number) => void
}

function fmt(n: number) {
  return '$ ' + Math.round(n).toLocaleString('es-CO')
}

function calcTotal(p: { envases: number; etiqueta: number; caja: number; flete: number }, productoCosto: number) {
  return p.envases + p.etiqueta + p.caja + p.flete + productoCosto
}

export default function TablaArfert({ costos, editados, factoresEditados, onCostoChange, onFactorChange }: Props) {
  let grupoActual = ''

  return (
    <div className="space-y-5">
      {costos.map(cp => {
        const esNuevoGrupo = cp.grupo !== grupoActual
        if (esNuevoGrupo) grupoActual = cp.grupo

        return (
          <div key={cp.producto}>
            {esNuevoGrupo && (
              <div className="text-xs font-bold text-[#2d7a3a] uppercase tracking-widest mb-3 mt-2 pb-1 border-b border-[#c8e6c9]">
                {cp.grupo}
              </div>
            )}
            <div className="bg-white rounded-xl border border-[#e0ebe2] shadow-sm overflow-hidden">
              <div className="bg-[#2d7a3a] px-4 py-2.5 flex items-center justify-between">
                <span className="text-white text-sm font-bold tracking-wide">{cp.producto}</span>
                {(cp.presentaciones.some(p => editados[p.id] !== undefined) ||
                  cp.presentaciones.some(p => factoresEditados[p.id] !== undefined)) && (
                  <span className="bg-yellow-300 text-yellow-900 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    ● Editado
                  </span>
                )}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-[#f0f7f1]">
                      <th className="px-4 py-2 text-left font-bold text-[#27500a] uppercase tracking-wide w-32">Costo</th>
                      {cp.presentaciones.map(p => (
                        <th key={p.id} className="px-4 py-2 text-right font-bold text-[#27500a] uppercase tracking-wide">
                          {p.und}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(['envases', 'etiqueta', 'caja', 'flete'] as const).map(campo => (
                      <tr key={campo} className="border-t border-gray-50">
                        <td className="px-4 py-1.5 text-gray-500 font-medium capitalize bg-gray-50">{campo}</td>
                        {cp.presentaciones.map(p => (
                          <td key={p.id} className="px-4 py-1.5 text-right text-gray-600">
                            {fmt(p[campo])}
                          </td>
                        ))}
                      </tr>
                    ))}

                    {/* Costo producto — editable */}
                    <tr className="border-t border-[#c8e6c9] bg-[#f0faf2]">
                      <td className="px-4 py-2 font-bold text-[#2d7a3a]">🔧 Producto</td>
                      {cp.presentaciones.map(p => (
                        <td key={p.id} className="px-4 py-2 text-right">
                          <input
                            type="number"
                            value={editados[p.id] ?? p.productoCosto}
                            onChange={e => onCostoChange(p.id, Number(e.target.value))}
                            className="w-28 text-right border-b border-dashed border-[#a8d8b0] bg-transparent text-[#2d7a3a] font-bold outline-none focus:border-[#2d7a3a] py-0.5 text-xs"
                          />
                        </td>
                      ))}
                    </tr>

                    {/* Factor — editable */}
                    <tr className="border-t border-[#c8e6c9] bg-[#fff8e6]">
                      <td className="px-4 py-2 font-bold text-yellow-700">📊 Factor</td>
                      {cp.presentaciones.map(p => (
                        <td key={p.id} className="px-4 py-2 text-right">
                          <input
                            type="number"
                            step="0.01"
                            min="0.1"
                            max="1"
                            value={factoresEditados[p.id] ?? p.factor ?? 0.5}
                            onChange={e => onFactorChange(p.id, Number(e.target.value))}
                            className="w-20 text-right border-b border-dashed border-yellow-400 bg-transparent text-yellow-700 font-bold outline-none focus:border-yellow-600 py-0.5 text-xs"
                          />
                        </td>
                      ))}
                    </tr>

                    {/* Total */}
                    <tr className="border-t border-[#c8e6c9] bg-[#e8f0e9]">
                      <td className="px-4 py-2 font-bold text-gray-700">Total costo</td>
                      {cp.presentaciones.map(p => {
                        const productoCosto = editados[p.id] ?? p.productoCosto
                        const total = calcTotal(p, productoCosto)
                        return (
                          <td key={p.id} className="px-4 py-2 text-right font-bold text-gray-800">
                            {fmt(total)}
                          </td>
                        )
                      })}
                    </tr>

                    {/* Precio distribución (preview) */}
                    <tr className="border-t border-[#c8e6c9] bg-[#f0f7f1]">
                      <td className="px-4 py-2 font-bold text-[#2d7a3a]">💰 Precio dist.</td>
                      {cp.presentaciones.map(p => {
                        const productoCosto = editados[p.id] ?? p.productoCosto
                        const total = calcTotal(p, productoCosto)
                        const factor = factoresEditados[p.id] ?? p.factor ?? 0.5
                        const precio = factor > 0 ? Math.round(total / factor) : 0
                        return (
                          <td key={p.id} className="px-4 py-2 text-right font-bold text-[#2d7a3a]">
                            {fmt(precio)}
                          </td>
                        )
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}