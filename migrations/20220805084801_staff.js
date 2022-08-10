/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("staff", (table) => {
        table.increments("staff_id")
        table.integer("scl_id").unsigned()
        table.foreign("scl_id").references("school.scl_id")
        table.string("f_name").notNullable()
        table.string("l_name").notNullable()
        table.string("phone_no").notNullable()
        table.boolean("status").notNullable()
        table.string("eamil").notNullable()
        table.string("qualification").notNullable()
        table.string("password").notNullable()
        table.string("salt")
        table.string("forgetPasswordtoken")
        table.timestamp("join_date").defaultTo(knex.fn.now())
        table.timestamp("update_at").defaultTo(knex.fn.now())
    })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("staff")
};