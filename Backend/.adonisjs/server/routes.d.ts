import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'precios.zonas': { paramsTuple?: []; params?: {} }
    'precios.productos': { paramsTuple: [ParamValue]; params: {'nombre': ParamValue} }
    'precios.update_precio': { paramsTuple: [ParamValue,ParamValue]; params: {'nombre': ParamValue,'id': ParamValue} }
    'precios.bulk_update': { paramsTuple: [ParamValue]; params: {'nombre': ParamValue} }
    'costos_arfert.index': { paramsTuple?: []; params?: {} }
    'costos_arfert.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'precios.zonas': { paramsTuple?: []; params?: {} }
    'precios.productos': { paramsTuple: [ParamValue]; params: {'nombre': ParamValue} }
    'costos_arfert.index': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'precios.zonas': { paramsTuple?: []; params?: {} }
    'precios.productos': { paramsTuple: [ParamValue]; params: {'nombre': ParamValue} }
    'costos_arfert.index': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'precios.update_precio': { paramsTuple: [ParamValue,ParamValue]; params: {'nombre': ParamValue,'id': ParamValue} }
    'precios.bulk_update': { paramsTuple: [ParamValue]; params: {'nombre': ParamValue} }
    'costos_arfert.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}