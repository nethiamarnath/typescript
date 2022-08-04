/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("std_exam", (table) => {
        table.increments("se_id") // it will automatically create id as primary
        table.string("std_name").notNullable()
        table.integer("std_id").unsigned()
        table.integer("exam_id")
        table.foreign("std_id").references("students.std_id")
        table.integer("percentage")
        table.string("grade")
        table.timestamp("create_at").defaultTo(knex.fn.now())
        table.timestamp("update_at").defaultTo(knex.fn.now())
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("std_exam")
};