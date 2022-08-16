/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("class", (table) => {
        table.increments("cls_id") // it will automatically create id as primary
        table.string("cls_name").notNullable()
        table.integer("no_of_students").unsigned()
        table.timestamp("create_at").defaultTo(knex.fn.now())
        table.timestamp("update_at").defaultTo(knex.fn.now())
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("class")
};