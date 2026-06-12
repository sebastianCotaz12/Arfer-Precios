import { useState } from 'react'
import Precios from './pages/Precios/Precios'
import PreciosArfert from './pages/Precios/PreciosArfert'

export default function App() {
  const [tab, setTab] = useState<'arfert' | 'distribucion'>('arfert')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAV */}
      <nav className="bg-[#2d7a3a] sticky top-0 z-50 shadow-md">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-lg">
              🌱
            </div>
            <div>
              <div className="text-white font-semibold text-base leading-tight">Arfert</div>
              <div className="text-[#a8d8b0] text-xs">Agroquímicos · Lista de precios 2026</div>
            </div>
          </div>
        </div>
      </nav>

      {/* TABS */}
      <div className="border-b border-[#c8e6c9] bg-white sticky top-14 z-40">
        <div className="max-w-5xl mx-auto px-4 flex gap-1">
          <button
            onClick={() => setTab('arfert')}
            className={`px-5 py-3 text-sm font-semibold border-b-2 transition ${
              tab === 'arfert'
                ? 'border-[#2d7a3a] text-[#2d7a3a]'
                : 'border-transparent text-gray-500 hover:text-[#2d7a3a]'
            }`}
          >
            📋 Precios Arfert
          </button>
          <button
            onClick={() => setTab('distribucion')}
            className={`px-5 py-3 text-sm font-semibold border-b-2 transition ${
              tab === 'distribucion'
                ? 'border-[#2d7a3a] text-[#2d7a3a]'
                : 'border-transparent text-gray-500 hover:text-[#2d7a3a]'
            }`}
          >
            📦 Precios Distribución
          </button>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        {tab === 'arfert' ? <PreciosArfert /> : <Precios />}
      </div>
    </div>
  )
}