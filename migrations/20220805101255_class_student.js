/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("class_student", (table) => {
        table.increments("id")
        table.integer("std_id")
        table.integer("scl_id")
        table.integer("cls_id")
        table.timestamp("create_at").defaultTo(knex.fn.now())
        table.timestamp("update_at").defaultTo(knex.fn.now())
    })
};
// 9. New table ClassHasStudents (stdID,schoolID,ClassID), Access only school admin..

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("class_student")
};