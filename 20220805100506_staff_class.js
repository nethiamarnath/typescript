/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("staff_class", (table) => {
        table.increments("id")
        table.integer("staff_id").unsigned()
        table.foreign("staff_id").references("staff.staff_id")
        table.integer("cls_id").unsigned()
        table.foreign("cls_id").references("class.cls_id")
        table.integer("subj_id").unsigned()
        table.foreign("subj_id").references("subject.subj_id")
        table.boolean("status")
        table.timestamp("create_at").defaultTo(knex.fn.now())
        table.timestamp("update_at").defaultTo(knex.fn.now())
    })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("staff_class")
};