/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("marks", (table) => {
        table.increments("id") // it will automatically create id as primary
        table.integer("se_id").unsigned()
        table.foreign("se_id").references("std_exam.se_id")
        table.integer("maths")
        table.integer("physics")
        table.integer("chemistry")
        table.integer("english")
        table.integer("french")
        table.timestamp("create_at").defaultTo(knex.fn.now())
        table.timestamp("update_at").defaultTo(knex.fn.now())
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("marks")
};