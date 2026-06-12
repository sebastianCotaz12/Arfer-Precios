import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'costos_arfert'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.decimal('factor', 6, 4).notNullable().defaultTo(0.5)
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('factor')
    })
  }
}