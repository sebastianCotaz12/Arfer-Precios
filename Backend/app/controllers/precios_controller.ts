import type { HttpContext } from '@adonisjs/core/http'
import Zona from '#models/zona'
import Producto from '#models/producto'

export default class PreciosController {
  async zonas({ response }: HttpContext) {
    const zonas = await Zona.query().orderBy('nombre', 'asc')
    return response.ok(zonas)
  }

  async productos({ params, response }: HttpContext) {
    const zona = await Zona.findByOrFail('nombre', decodeURIComponent(params.nombre))
    const productos = await Producto.query()
      .where('zona_id', zona.id)
      .orderBy('orden', 'asc')

    return response.ok({
      zona: zona.nombre,
      productos: productos.map((p) => ({
        id: p.id,
        grupo: p.grupo,
        producto: p.producto,
        und: p.und,
        precio: Number(p.precio),
        factor: Number(p.factor),
        precioA: p.factor > 0 ? Math.round(Number(p.precio) / Number(p.factor)) : 0,
      })),
    })
  }

  async updatePrecio({ params, request, response }: HttpContext) {
    const zona = await Zona.findByOrFail('nombre', decodeURIComponent(params.nombre))
    const producto = await Producto.query()
      .where('id', params.id)
      .where('zona_id', zona.id)
      .firstOrFail()

    const { precio, factor } = request.only(['precio', 'factor'])
    if (precio !== undefined) producto.precio = Number(precio)
    if (factor !== undefined) producto.factor = Number(factor)
    await producto.save()

    return response.ok({
      id: producto.id,
      precio: Number(producto.precio),
      factor: Number(producto.factor),
      precioA: producto.factor > 0 ? Math.round(Number(producto.precio) / Number(producto.factor)) : 0,
    })
  }

  async bulkUpdate({ params, request, response }: HttpContext) {
    const zona = await Zona.findByOrFail('nombre', decodeURIComponent(params.nombre))
    const { productos } = request.only(['productos']) as {
      productos: Array<{ id: number; precio: number; factor?: number }>
    }

    if (!Array.isArray(productos) || productos.length === 0) {
      return response.badRequest({ error: 'productos array requerido' })
    }

    const ids = productos.map((p) => p.id)
    const registros = await Producto.query()
      .whereIn('id', ids)
      .where('zona_id', zona.id)

    for (const reg of registros) {
      const update = productos.find((p) => p.id === reg.id)
      if (!update) continue
      reg.precio = Number(update.precio)
      if (update.factor !== undefined) reg.factor = Number(update.factor)
      await reg.save()
    }

    return response.ok({ updated: registros.length })
  }
}