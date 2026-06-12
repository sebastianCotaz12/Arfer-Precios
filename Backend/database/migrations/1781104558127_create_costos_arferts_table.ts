import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'costos_arfert'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('producto', 120).notNullable()
      table.string('und', 40).notNullable()
      table.string('grupo', 80).notNullable().defaultTo('Líquidos')
      table.decimal('envases', 14, 2).notNullable().defaultTo(0)
      table.decimal('etiqueta', 14, 2).notNullable().defaultTo(0)
      table.decimal('caja', 14, 2).notNullable().defaultTo(0)
      table.decimal('flete', 14, 2).notNullable().defaultTo(0)
      table.decimal('producto_costo', 14, 2).notNullable().defaultTo(0)
      table.integer('orden').notNullable().defaultTo(0)
      table.unique(['producto', 'und'])
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}