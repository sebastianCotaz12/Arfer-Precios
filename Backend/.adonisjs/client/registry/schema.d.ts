/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'precios.zonas': {
    methods: ["GET","HEAD"]
    pattern: '/api/zonas'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/precios_controller').default['zonas']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/precios_controller').default['zonas']>>>
    }
  }
  'precios.productos': {
    methods: ["GET","HEAD"]
    pattern: '/api/zonas/:nombre/productos'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { nombre: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/precios_controller').default['productos']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/precios_controller').default['productos']>>>
    }
  }
  'precios.update_precio': {
    methods: ["PUT"]
    pattern: '/api/zonas/:nombre/productos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue, ParamValue]
      params: { nombre: ParamValue; id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/precios_controller').default['updatePrecio']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/precios_controller').default['updatePrecio']>>>
    }
  }
  'precios.bulk_update': {
    methods: ["PUT"]
    pattern: '/api/zonas/:nombre/productos'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { nombre: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/precios_controller').default['bulkUpdate']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/precios_controller').default['bulkUpdate']>>>
    }
  }
  'costos_arfert.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/costos'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/costos_arferts_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/costos_arferts_controller').default['index']>>>
    }
  }
  'costos_arfert.update': {
    methods: ["PUT"]
    pattern: '/api/costos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/costos_arferts_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/costos_arferts_controller').default['update']>>>
    }
  }
}
