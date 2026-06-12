import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Zona from './zona.js'

export default class Producto extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare zonaId: number

  @column()
  declare grupo: string

  @column()
  declare producto: string

  @column()
  declare und: string

  @column()
  declare precio: number

  @column()
  declare factor: number

  @column()
  declare orden: number

  @belongsTo(() => Zona)
  declare zona: BelongsTo<typeof Zona>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}