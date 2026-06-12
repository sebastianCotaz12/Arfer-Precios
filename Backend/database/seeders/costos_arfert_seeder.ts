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

  { producto: 'REFOR-XAL', und: 'LITRO', grupo: 'Líquidos', envases: 2326, etiqueta: 350, caja: 250, flete: 100, productoCosto: 8820, orden: 19 },
  { producto: 'REFOR-XAL', und: 'GALON', grupo: 'Líquidos', envases: 5712, etiqueta: 600, caja: 600, flete: 400, productoCosto: 35280, orden: 20 },
  { producto: 'REFOR-XAL', und: 'POMA',  grupo: 'Líquidos', envases: 28000, etiqueta: 800, caja: 0, flete: 2500, productoCosto: 176400, orden: 21 },

  { producto: 'FULVIPLEX PK400', und: 'LITRO', grupo: 'Líquidos', envases: 2326, etiqueta: 350, caja: 250, flete: 100, productoCosto: 13600, orden: 22 },
  { producto: 'FULVIPLEX PK400', und: 'GALON', grupo: 'Líquidos', envases: 5712, etiqueta: 600, caja: 600, flete: 400, productoCosto: 54400, orden: 23 },
  { producto: 'FULVIPLEX PK400', und: 'POMA',  grupo: 'Líquidos', envases: 28000, etiqueta: 800, caja: 0, flete: 2500, productoCosto: 272000, orden: 24 },

  { producto: 'FULVIPLEX HUMIKO', und: 'LITRO', grupo: 'Líquidos', envases: 2326, etiqueta: 600, caja: 250, flete: 100, productoCosto: 6336, orden: 25 },
  { producto: 'FULVIPLEX HUMIKO', und: 'GALON', grupo: 'Líquidos', envases: 5712, etiqueta: 600, caja: 600, flete: 400, productoCosto: 25344, orden: 26 },
  { producto: 'FULVIPLEX HUMIKO', und: 'POMA',  grupo: 'Líquidos', envases: 28000, etiqueta: 600, caja: 0, flete: 2500, productoCosto: 126720, orden: 27 },

  { producto: 'TENSFULL', und: 'LITRO', grupo: 'Líquidos', envases: 2326, etiqueta: 600, caja: 250, flete: 100, productoCosto: 8250, orden: 28 },
  { producto: 'TENSFULL', und: 'GALON', grupo: 'Líquidos', envases: 5712, etiqueta: 600, caja: 600, flete: 400, productoCosto: 33000, orden: 29 },
  { producto: 'TENSFULL', und: 'POMA',  grupo: 'Líquidos', envases: 28000, etiqueta: 600, caja: 0, flete: 2500, productoCosto: 165000, orden: 30 },

  { producto: 'KOLONIZAR', und: 'LITRO', grupo: 'Líquidos', envases: 2326, etiqueta: 600, caja: 250, flete: 100, productoCosto: 29000, orden: 31 },
  { producto: 'KOLONIZAR', und: 'GALON', grupo: 'Líquidos', envases: 5712, etiqueta: 600, caja: 600, flete: 400, productoCosto: 116000, orden: 32 },
  { producto: 'KOLONIZAR', und: 'POMA',  grupo: 'Líquidos', envases: 28000, etiqueta: 600, caja: 0, flete: 2500, productoCosto: 580000, orden: 33 },

  { producto: 'NUTREX CALCIO BORO', und: 'LITRO', grupo: 'Líquidos', envases: 2326, etiqueta: 350, caja: 250, flete: 100, productoCosto: 5560, orden: 34 },
  { producto: 'NUTREX CALCIO BORO', und: 'GALON', grupo: 'Líquidos', envases: 5712, etiqueta: 600, caja: 600, flete: 400, productoCosto: 22240, orden: 35 },
  { producto: 'NUTREX CALCIO BORO', und: 'POMA',  grupo: 'Líquidos', envases: 28000, etiqueta: 800, caja: 0, flete: 2500, productoCosto: 111200, orden: 36 },

  // ── SÓLIDOS Y GRANULADOS ──
  { producto: 'DAVIGOR', und: '300 GR', grupo: 'Sólidos y granulados', envases: 185, etiqueta: 0, caja: 75, flete: 40, productoCosto: 5110, orden: 37 },

  { producto: 'REPUNTE', und: 'KILO',     grupo: 'Sólidos y granulados', envases: 480, etiqueta: 0, caja: 120, flete: 160, productoCosto: 7850, orden: 38 },
  { producto: 'REPUNTE', und: '10 KILOS', grupo: 'Sólidos y granulados', envases: 2400, etiqueta: 0, caja: 0, flete: 1600, productoCosto: 78500, orden: 39 },

  { producto: 'RIZHOMAX', und: 'KILO', grupo: 'Sólidos y granulados', envases: 420, etiqueta: 0, caja: 148, flete: 100, productoCosto: 14850, orden: 40 },

  { producto: 'OPTIMUS INICIO', und: 'KILO',     grupo: 'Sólidos y granulados', envases: 362, etiqueta: 0, caja: 160, flete: 160, productoCosto: 7350, orden: 41 },
  { producto: 'OPTIMUS INICIO', und: '10 KILOS', grupo: 'Sólidos y granulados', envases: 2400, etiqueta: 0, caja: 0, flete: 2500, productoCosto: 73500, orden: 42 },
  { producto: 'OPTIMUS INICIO', und: '25 KILOS', grupo: 'Sólidos y granulados', envases: 0, etiqueta: 0, caja: 0, flete: 5000, productoCosto: 183750, orden: 43 },

  { producto: 'OPTIMUS PRODUCCION', und: 'KILO',     grupo: 'Sólidos y granulados', envases: 362, etiqueta: 0, caja: 160, flete: 160, productoCosto: 5900, orden: 44 },
  { producto: 'OPTIMUS PRODUCCION', und: '10 KILOS', grupo: 'Sólidos y granulados', envases: 2400, etiqueta: 0, caja: 0, flete: 2500, productoCosto: 59000, orden: 45 },
  { producto: 'OPTIMUS PRODUCCION', und: '25 KILOS', grupo: 'Sólidos y granulados', envases: 0, etiqueta: 0, caja: 0, flete: 5000, productoCosto: 147500, orden: 46 },

  { producto: 'ALGAS MIX 700', und: 'KILO',   grupo: 'Sólidos y granulados', envases: 3940, etiqueta: 0, caja: 350, flete: 200, productoCosto: 45250, orden: 47 },
  { producto: 'ALGAS MIX 700', und: '250 GR', grupo: 'Sólidos y granulados', envases: 300, etiqueta: 0, caja: 200, flete: 100, productoCosto: 12420, orden: 48 },

  { producto: 'FULVIPLEX HUMICO 20 KILOS', und: '20 KILOS', grupo: 'Sólidos y granulados', envases: 3500, etiqueta: 0, caja: 0, flete: 3000, productoCosto: 75000, orden: 49 },

  { producto: 'RETOÑADOR', und: '60 GR', grupo: 'Sólidos y granulados', envases: 144, etiqueta: 12, caja: 113, flete: 10, productoCosto: 3220, orden: 50 },
  { producto: 'RETOÑADOR', und: 'KILO',  grupo: 'Sólidos y granulados', envases: 1200, etiqueta: 0, caja: 4500, flete: 200, productoCosto: 34600, orden: 51 },

  { producto: 'FULVIPLEX 100', und: 'KILO',     grupo: 'Sólidos y granulados', envases: 900, etiqueta: 0, caja: 500, flete: 500, productoCosto: 9820, orden: 52 },
  { producto: 'FULVIPLEX 100', und: '10 KILOS', grupo: 'Sólidos y granulados', envases: 2400, etiqueta: 0, caja: 0, flete: 3000, productoCosto: 61850, orden: 53 },

  { producto: 'MANANGRE MICRO',      und: '46 KILOS', grupo: 'Sólidos y granulados', envases: 0, etiqueta: 0, caja: 0, flete: 8000, productoCosto: 48750, orden: 54 },
  { producto: 'MANANGRE FOSFORADO',  und: '50 KILOS', grupo: 'Sólidos y granulados', envases: 0, etiqueta: 0, caja: 0, flete: 8000, productoCosto: 51080, orden: 55 },

  // ── MANAGER ──
  { producto: 'MANAGER DESARROLLO', und: 'KILO',     grupo: 'Manager', envases: 362, etiqueta: 0, caja: 160, flete: 160, productoCosto: 5160, orden: 56 },
  { producto: 'MANAGER DESARROLLO', und: '10 KILOS', grupo: 'Manager', envases: 2800, etiqueta: 0, caja: 0, flete: 2500, productoCosto: 51600, orden: 57 },
  { producto: 'MANAGER DESARROLLO', und: '25 KILOS', grupo: 'Manager', envases: 3500, etiqueta: 0, caja: 0, flete: 5250, productoCosto: 129000, orden: 58 },

  { producto: 'MANAGER INICIO', und: 'KILO',     grupo: 'Manager', envases: 362, etiqueta: 0, caja: 160, flete: 160, productoCosto: 7900, orden: 59 },
  { producto: 'MANAGER INICIO', und: '10 KILOS', grupo: 'Manager', envases: 2800, etiqueta: 0, caja: 0, flete: 2500, productoCosto: 79000, orden: 60 },
  { producto: 'MANAGER INICIO', und: '25 KILOS', grupo: 'Manager', envases: 3500, etiqueta: 0, caja: 0, flete: 5250, productoCosto: 197500, orden: 61 },

  { producto: 'MANAGER PRODUCCION', und: 'KILO',     grupo: 'Manager', envases: 362, etiqueta: 0, caja: 160, flete: 160, productoCosto: 6900, orden: 62 },
  { producto: 'MANAGER PRODUCCION', und: '10 KILOS', grupo: 'Manager', envases: 2800, etiqueta: 0, caja: 0, flete: 2500, productoCosto: 69000, orden: 63 },
  { producto: 'MANAGER PRODUCCION', und: '25 KILOS', grupo: 'Manager', envases: 3500, etiqueta: 0, caja: 0, flete: 5250, productoCosto: 172500, orden: 64 },

  { producto: 'MANAGER 10-20-20', und: 'KILO',     grupo: 'Manager', envases: 362, etiqueta: 0, caja: 160, flete: 160, productoCosto: 8480, orden: 65 },
  { producto: 'MANAGER 10-20-20', und: '10 KILOS', grupo: 'Manager', envases: 2800, etiqueta: 0, caja: 0, flete: 2500, productoCosto: 84800, orden: 66 },
  { producto: 'MANAGER 10-20-20', und: '25 KILOS', grupo: 'Manager', envases: 3500, etiqueta: 0, caja: 0, flete: 5250, productoCosto: 212000, orden: 67 },

  { producto: 'MANAGER MENORES', und: 'KILO',     grupo: 'Manager', envases: 480, etiqueta: 0, caja: 120, flete: 160, productoCosto: 6950, orden: 68 },
  { producto: 'MANAGER MENORES', und: '10 KILOS', grupo: 'Manager', envases: 2400, etiqueta: 0, caja: 0, flete: 1600, productoCosto: 69500, orden: 69 },
]

export default class extends BaseSeeder {
  async run() {
    await CostoArfert.query().delete()
    await CostoArfert.createMany(COSTOS)
    console.log(`Costos Arfert cargados: ${COSTOS.length} registros`)
  }
}