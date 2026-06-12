import type { HttpContext } from '@adonisjs/core/http'
import CostoArfert from '#models/costo_arfert'
import Producto from '#models/producto'

export default class CostosArfertController {

  
   //GET /api/costos
   
  async index({ response }: HttpContext) {
    const costos = await CostoArfert.query().orderBy('orden', 'asc')

    const agrupado: Record<string, any> = {}
    costos.forEach(c => {
      if (!agrupado[c.producto]) {
        agrupado[c.producto] = {
          producto: c.producto,
          grupo: c.grupo,
          presentaciones: []
        }
      }
      const total = Number(c.envases) + Number(c.etiqueta) + Number(c.caja) + Number(c.flete) + Number(c.productoCosto)
      agrupado[c.producto].presentaciones.push({
        id: c.id,
        und: c.und,
        envases: Number(c.envases),
        etiqueta: Number(c.etiqueta),
        caja: Number(c.caja),
        flete: Number(c.flete),
        productoCosto: Number(c.productoCosto),
        factor: Number(c.factor),
        total: Math.round(total),
      })
    })

    return response.ok(Object.values(agrupado))
  }

  // PUT /api/costos/:id
   
  async update({ params, request, response }: HttpContext) {
    const costo = await CostoArfert.findOrFail(params.id)
    const { productoCosto, factor, envases, etiqueta, caja, flete } = request.only([
      'productoCosto', 'factor', 'envases', 'etiqueta', 'caja', 'flete'
    ])

    if (productoCosto !== undefined) costo.productoCosto = Number(productoCosto)
    if (factor !== undefined) costo.factor = Number(factor)
    if (envases !== undefined) costo.envases = Number(envases)
    if (etiqueta !== undefined) costo.etiqueta = Number(etiqueta)
    if (caja !== undefined) costo.caja = Number(caja)
    if (flete !== undefined) costo.flete = Number(flete)

    await costo.save()

    const total = Number(costo.envases) + Number(costo.etiqueta) + Number(costo.caja) + Number(costo.flete) + Number(costo.productoCosto)

    // Buscar todos los productos de todas las zonas con mismo nombre y presentación
    const productos = await Producto.query()
      .where('producto', costo.producto)
      .where('und', costo.und)

    // Recalcular precio de cada zona usando su propio factor
    for (const prod of productos) {
      if (Number(prod.factor) > 0) {
        prod.precio = Math.round(total / Number(prod.factor))
        await prod.save()
      }
    }

    return response.ok({
      id: costo.id,
      productoCosto: Number(costo.productoCosto),
      factor: Number(costo.factor),
      total: Math.round(total),
      productosActualizados: productos.length,
    })
  }

  
   // GET /api/costos/precio
   
  async calcularPrecio({ request, response }: HttpContext) {
    const { total, factor } = request.qs()
    if (!total || !factor) return response.badRequest({ error: 'total y factor requeridos' })
    const precio = Math.round(Number(total) / Number(factor))
    return response.ok({ precio })
  }
}