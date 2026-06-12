/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'precios.zonas': {
    methods: ["GET","HEAD"],
    pattern: '/api/zonas',
    tokens: [{"old":"/api/zonas","type":0,"val":"api","end":""},{"old":"/api/zonas","type":0,"val":"zonas","end":""}],
    types: placeholder as Registry['precios.zonas']['types'],
  },
  'precios.productos': {
    methods: ["GET","HEAD"],
    pattern: '/api/zonas/:nombre/productos',
    tokens: [{"old":"/api/zonas/:nombre/productos","type":0,"val":"api","end":""},{"old":"/api/zonas/:nombre/productos","type":0,"val":"zonas","end":""},{"old":"/api/zonas/:nombre/productos","type":1,"val":"nombre","end":""},{"old":"/api/zonas/:nombre/productos","type":0,"val":"productos","end":""}],
    types: placeholder as Registry['precios.productos']['types'],
  },
  'precios.update_precio': {
    methods: ["PUT"],
    pattern: '/api/zonas/:nombre/productos/:id',
    tokens: [{"old":"/api/zonas/:nombre/productos/:id","type":0,"val":"api","end":""},{"old":"/api/zonas/:nombre/productos/:id","type":0,"val":"zonas","end":""},{"old":"/api/zonas/:nombre/productos/:id","type":1,"val":"nombre","end":""},{"old":"/api/zonas/:nombre/productos/:id","type":0,"val":"productos","end":""},{"old":"/api/zonas/:nombre/productos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['precios.update_precio']['types'],
  },
  'precios.bulk_update': {
    methods: ["PUT"],
    pattern: '/api/zonas/:nombre/productos',
    tokens: [{"old":"/api/zonas/:nombre/productos","type":0,"val":"api","end":""},{"old":"/api/zonas/:nombre/productos","type":0,"val":"zonas","end":""},{"old":"/api/zonas/:nombre/productos","type":1,"val":"nombre","end":""},{"old":"/api/zonas/:nombre/productos","type":0,"val":"productos","end":""}],
    types: placeholder as Registry['precios.bulk_update']['types'],
  },
  'costos_arfert.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/costos',
    tokens: [{"old":"/api/costos","type":0,"val":"api","end":""},{"old":"/api/costos","type":0,"val":"costos","end":""}],
    types: placeholder as Registry['costos_arfert.index']['types'],
  },
  'costos_arfert.update': {
    methods: ["PUT"],
    pattern: '/api/costos/:id',
    tokens: [{"old":"/api/costos/:id","type":0,"val":"api","end":""},{"old":"/api/costos/:id","type":0,"val":"costos","end":""},{"old":"/api/costos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['costos_arfert.update']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
