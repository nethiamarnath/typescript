/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("exam", (table) => {
        table.increments("exam_id") // it will automatically create id as primary
        table.string("exam_name").notNullable()
        table.integer("order_by")
        table.timestamp("create_at").defaultTo(knex.fn.now())
        table.timestamp("update_at").defaultTo(knex.fn.now())
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("exam")
};