import type { Zona } from '../api'

interface Props {
  zonas: Zona[]
  zonaActual: string
  onZonaChange: (nombre: string) => void
}

export default function ZonaPills({ zonas, zonaActual, onZonaChange }: Props) {
  return (
    <div className="mb-5">
      <div className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-wider mb-2">
        Zona / Cliente
      </div>
      <div className="flex flex-wrap gap-2">
        {zonas.map(z => (
          <button
            key={z.id}
            onClick={() => onZonaChange(z.nombre)}
            className={`px-3 py-1.5 rounded-full text-sm border transition ${
              z.nombre === zonaActual
                ? 'bg-[#2d7a3a] text-white border-[#2d7a3a]'
                : 'bg-white text-gray-500 border-gray-200 hover:border-[#2d7a3a] hover:text-[#2d7a3a]'
            }`}
          >
            {z.nombre}
          </button>
        ))}
      </div>
    </div>
  )
}