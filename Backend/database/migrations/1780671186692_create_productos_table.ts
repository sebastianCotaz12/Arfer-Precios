import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'productos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('zona_id').unsigned().references('id').inTable('zonas').onDelete('CASCADE')
      table.string('grupo', 80).notNullable()
      table.string('producto', 120).notNullable().defaultTo('')
      table.string('und', 40).notNullable()
      table.decimal('precio', 14, 2).notNullable()
      table.decimal('factor', 6, 4).notNullable()
      table.integer('orden').notNullable().defaultTo(0)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}