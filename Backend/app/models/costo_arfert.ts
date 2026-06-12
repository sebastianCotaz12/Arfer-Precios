import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class CostoArfert extends BaseModel {
  static table = 'costos_arfert'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare producto: string

  @column()
  declare und: string

  @column()
  declare grupo: string

  @column()
  declare envases: number

  @column()
  declare etiqueta: number

  @column()
  declare caja: number

  @column()
  declare flete: number

  @column()
  declare productoCosto: number

  @column()
  declare factor: number

  @column()
  declare orden: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}