import { BaseSeeder } from '@adonisjs/lucid/seeders'
import CostoArfert from '#models/costo_arfert'

const COSTOS = [
  // ── LÍQUIDOS ──
  { producto: 'BROTE DE HOJAS', und: 'LITRO', grupo: 'Líquidos', envases: 2326, etiqueta: 350, caja: 250, flete: 150, productoCosto: 3920, orden: 1 },
  { producto: 'BROTE DE HOJAS', und: 'GALON', grupo: 'Líquidos', envases: 5712, etiqueta: 600, caja: 650, flete: 600, productoCosto: 15680, orden: 2 },
  { producto: 'BROTE DE HOJAS', und: 'POMA',  grupo: 'Líquidos', envases: 28000, etiqueta: 800, caja: 0, flete: 2500, productoCosto: 78400, orden: 3 },

  { producto: 'REYCAB-Zn', und: 'LITRO', grupo: 'Líquidos', envases: 2326, etiqueta: 350, caja: 250, flete: 100, productoCosto: 9350, orden: 4 },
  { producto: 'REYCAB-Zn', und: 'GALON', grupo: 'Líquidos', envases: 5712, etiqueta: 600, caja: 600, flete: 400, productoCosto: 37400, orden: 5 },
  { producto: 'REYCAB-Zn', und: 'POMA',  grupo: 'Líquidos', envases: 28000, etiqueta: 800, caja: 0, flete: 2500, productoCosto: 187000, orden: 6 },

  { producto: 'HOJAS FORTE 500', und: 'LITRO', grupo: 'Líquidos', envases: 2326, etiqueta: 350, caja: 250, flete: 100, productoCosto: 6740, orden: 7 },
  { producto: 'HOJAS FORTE 500', und: 'GALON', grupo: 'Líquidos', envases: 5712, etiqueta: 600, caja: 600, flete: 400, productoCosto: 26960, orden: 8 },
  { producto: 'HOJAS FORTE 500', und: 'POMA',  grupo: 'Líquidos', envases: 28000, etiqueta: 800, caja: 0, flete: 2500, productoCosto: 134800, orden: 9 },

  { producto: 'ENGROLLENADOR', und: 'LITRO', grupo: 'Líquidos', envases: 2326, etiqueta: 350, caja: 250, flete: 100, productoCosto: 9150, orden: 10 },
  { producto: 'ENGROLLENADOR', und: 'GALON', grupo: 'Líquidos', envases: 5712, etiqueta: 600, caja: 600, flete: 400, productoCosto: 36600, orden: 11 },
  { producto: 'ENGROLLENADOR', und: 'POMA',  grupo: 'Líquidos', envases: 28000, etiqueta: 800, caja: 0, flete: 2500, productoCosto: 183000, orden: 12 },

  { producto: 'PATRON', und: 'LITRO', grupo: 'Líquidos', envases: 2326, etiqueta: 350, caja: 250, flete: 100, productoCosto: 5450, orden: 13 },
  { producto: 'PATRON', und: 'GALON', grupo: 'Líquidos', envases: 5712, etiqueta: 600, caja: 600, flete: 400, productoCosto: 21800, orden: 14 },
  { producto: 'PATRON', und: 'POMA',  grupo: 'Líquidos', envases: 28000, etiqueta: 800, caja: 0, flete: 2500, productoCosto: 109000, orden: 15 },

  { producto: 'FOLYAMIN', und: 'LITRO', grupo: 'Líquidos', envases: 2326, etiqueta: 350, caja: 250, flete: 100, productoCosto: 14450, orden: 16 },
  { producto: 'FOLYAMIN', und: 'GALON', grupo: 'Líquidos', envases: 5712, etiqueta: 600, caja: 600, flete: 400, productoCosto: 57800, orden: 17 },
  { producto: 'FOLYAMIN', und: 'POMA',  grupo: 'Líquidos', envases: 28000, etiqueta: 800, caja: 0, flete: 2500, productoCosto: 289000, orden: 18 },

  { producto: 'REFOR-XAL', und: 'LITRO', grupo: 'Líquidos', envases: 2326, etiqueta: 350, caja: 250, flete: 100, productoCosto: 9820, orden: 19 },
  { producto: 'REFOR-XAL', und: 'GALON', grupo: 'Líquidos', envases: 5712, etiqueta: 600, caja: 600, flete: 400, productoCosto: 39280, orden: 20 },
  { producto: 'REFOR-XAL', und: 'POMA',  grupo: 'Líquidos', envases: 28000, etiqueta: 800, caja: 0, flete: 2500, productoCosto: 172000, orden: 21 },

  { producto: 'FULVIPLEX PK 400', und: 'LITRO', grupo: 'Líquidos', envases: 2326, etiqueta: 350, caja: 250, flete: 100, productoCosto: 15400, orden: 22 },
  { producto: 'FULVIPLEX PK 400', und: 'GALON', grupo: 'Líquidos', envases: 5712, etiqueta: 600, caja: 600, flete: 400, productoCosto: 61600, orden: 23 },
  { producto: 'FULVIPLEX PK 400', und: 'POMA',  grupo: 'Líquidos', envases: 28000, etiqueta: 800, caja: 0, flete: 2500, productoCosto: 308000, orden: 24 },

  { producto: 'FULVIPLEX HUMIKO', und: 'LITRO', grupo: 'Líquidos', envases: 2326, etiqueta: 350, caja: 250, flete: 100, productoCosto: 6630, orden: 25 },
  { producto: 'FULVIPLEX HUMIKO', und: 'GALON', grupo: 'Líquidos', envases: 5712, etiqueta: 600, caja: 600, flete: 400, productoCosto: 26520, orden: 26 },
  { producto: 'FULVIPLEX HUMIKO', und: 'POMA',  grupo: 'Líquidos', envases: 28000, etiqueta: 800, caja: 0, flete: 2500, productoCosto: 132600, orden: 27 },

  { producto: 'TENSFULL', und: 'LITRO', grupo: 'Líquidos', envases: 2326, etiqueta: 350, caja: 250, flete: 100, productoCosto: 6380, orden: 28 },
  { producto: 'TENSFULL', und: 'GALON', grupo: 'Líquidos', envases: 5712, etiqueta: 600, caja: 600, flete: 400, productoCosto: 25520, orden: 29 },
  { producto: 'TENSFULL', und: 'POMA',  grupo: 'Líquidos', envases: 28000, etiqueta: 800, caja: 0, flete: 2500, productoCosto: 127600, orden: 30 },

  // ── SÓLIDOS ──
  { producto: 'DAVIGOR', und: '300 GR', grupo: 'Sólidos y granulados', envases: 450, etiqueta: 150, caja: 0, flete: 100, productoCosto: 4950, orden: 31 },

  { producto: 'REPUNTE', und: 'KILO',    grupo: 'Sólidos y granulados', envases: 300, etiqueta: 150, caja: 0, flete: 100, productoCosto: 4100, orden: 32 },
  { producto: 'REPUNTE', und: '10 KILOS',grupo: 'Sólidos y granulados', envases: 1800, etiqueta: 150, caja: 0, flete: 600, productoCosto: 41000, orden: 33 },

  { producto: 'RHIZOMAX', und: 'KILO', grupo: 'Sólidos y granulados', envases: 300, etiqueta: 150, caja: 0, flete: 100, productoCosto: 18630, orden: 34 },

  { producto: 'OPTIMUS INICIO', und: 'KILO',    grupo: 'Sólidos y granulados', envases: 300, etiqueta: 150, caja: 0, flete: 100, productoCosto: 4600, orden: 35 },
  { producto: 'OPTIMUS INICIO', und: '10 KILOS', grupo: 'Sólidos y granulados', envases: 1800, etiqueta: 150, caja: 0, flete: 600, productoCosto: 46000, orden: 36 },
  { producto: 'OPTIMUS INICIO', und: '25 KILOS', grupo: 'Sólidos y granulados', envases: 3500, etiqueta: 150, caja: 0, flete: 1200, productoCosto: 115000, orden: 37 },

  { producto: 'OPTIMUS PRODUCCION', und: 'KILO',    grupo: 'Sólidos y granulados', envases: 300, etiqueta: 150, caja: 0, flete: 100, productoCosto: 3550, orden: 38 },
  { producto: 'OPTIMUS PRODUCCION', und: '10 KILOS', grupo: 'Sólidos y granulados', envases: 1800, etiqueta: 150, caja: 0, flete: 600, productoCosto: 35500, orden: 39 },
  { producto: 'OPTIMUS PRODUCCION', und: '25 KILOS', grupo: 'Sólidos y granulados', envases: 3500, etiqueta: 150, caja: 0, flete: 1200, productoCosto: 88750, orden: 40 },

  { producto: 'FULVIPLEX', und: '14 KILOS', grupo: 'Sólidos y granulados', envases: 3500, etiqueta: 150, caja: 0, flete: 1200, productoCosto: 47750, orden: 41 },
  { producto: 'FULVIPLEX', und: '2 KILOS',  grupo: 'Sólidos y granulados', envases: 800, etiqueta: 150, caja: 0, flete: 300, productoCosto: 7300, orden: 42 },

  { producto: 'RETOÑADOR', und: '60 GR', grupo: 'Sólidos y granulados', envases: 200, etiqueta: 150, caja: 0, flete: 80, productoCosto: 2100, orden: 43 },
  { producto: 'RETOÑADOR', und: 'KILO',  grupo: 'Sólidos y granulados', envases: 300, etiqueta: 150, caja: 0, flete: 100, productoCosto: 14900, orden: 44 },

  { producto: 'FULVIPLEX ALGA 700', und: 'KILO',   grupo: 'Sólidos y granulados', envases: 300, etiqueta: 150, caja: 0, flete: 100, productoCosto: 40000, orden: 45 },
  { producto: 'FULVIPLEX ALGA 700', und: '250 GR',  grupo: 'Sólidos y granulados', envases: 200, etiqueta: 150, caja: 0, flete: 80, productoCosto: 10000, orden: 46 },

  { producto: 'MANGER MICRO',      und: '46 KILOS', grupo: 'Sólidos y granulados', envases: 4000, etiqueta: 150, caja: 0, flete: 1500, productoCosto: 40000, orden: 47 },
  { producto: 'MANAGER FOSFORADO', und: '50 KILOS', grupo: 'Sólidos y granulados', envases: 4000, etiqueta: 150, caja: 0, flete: 1500, productoCosto: 39000, orden: 48 },
]

export default class extends BaseSeeder {
  async run() {
    await CostoArfert.query().delete()
    await CostoArfert.createMany(COSTOS)
    console.log(`Costos Arfert cargados: ${COSTOS.length} registros`)
  }
}