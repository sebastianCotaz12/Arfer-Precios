import axios from 'axios'

const api = axios.create({ baseURL: '/api' })

// ── Zonas y Productos Distribución ──
export interface Zona {
  id: number
  nombre: string
}

export interface Producto {
  id: number
  grupo: string
  producto: string
  und: string
  precio: number
  factor: number
  precioA: number
}

export interface ProductosResponse {
  zona: string
  productos: Producto[]
}

export const getZonas = () =>
  api.get<Zona[]>('/zonas').then(r => r.data)

export const getProductos = (zona: string) =>
  api.get<ProductosResponse>(`/zonas/${encodeURIComponent(zona)}/productos`).then(r => r.data)

export const updatePrecio = (zona: string, id: number, precio: number) =>
  api.put(`/zonas/${encodeURIComponent(zona)}/productos/${id}`, { precio }).then(r => r.data)

export const bulkUpdate = (zona: string, productos: Array<{ id: number; precio: number }>) =>
  api.put(`/zonas/${encodeURIComponent(zona)}/productos`, { productos }).then(r => r.data)

// ── Costos Arfert ──
export interface Presentacion {
  id: number
  und: string
  envases: number
  etiqueta: number
  caja: number
  flete: number
  productoCosto: number
  total: number
}

export interface CostoProducto {
  producto: string
  grupo: string
  presentaciones: Presentacion[]
}

export const getCostos = () =>
  api.get<CostoProducto[]>('/costos').then(r => r.data)

export const updateCosto = (id: number, productoCosto: number, factor?: number) =>
  api.put(`/costos/${id}`, { productoCosto, factor }).then(r => r.data)