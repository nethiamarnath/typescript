/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("students", (table) => {
        table.increments("std_id") // it will automatically create id as primary
        table.string("std_name").notNullable()
        table.integer("cls_id").unsigned()
        table.integer("scl_id").unsigned()
        table.foreign("cls_id").references("class.cls_id")
        table.foreign("scl_id").references("school.scl_id")
        table.boolean("status").notNullable()
        table.date("dob").notNullable()
        table.timestamp("create_at").defaultTo(knex.fn.now())
        table.timestamp("update_at").defaultTo(knex.fn.now())
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("students")
};