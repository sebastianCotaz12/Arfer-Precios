/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  precios: {
    zonas: typeof routes['precios.zonas']
    productos: typeof routes['precios.productos']
    updatePrecio: typeof routes['precios.update_precio']
    bulkUpdate: typeof routes['precios.bulk_update']
  }
  costosArfert: {
    index: typeof routes['costos_arfert.index']
    update: typeof routes['costos_arfert.update']
  }
}
