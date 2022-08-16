const { id } = require("@hapi/joi/lib/base");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("admin_login", (table) => {
        table.increments("id")
        table.integer("admin_id").unsigned()
        table.foreign("admin_id").references("school_admin.admin_id")
        table.string("access_token")
        table.string("refress_token")
        table.timestamp("create_at").defaultTo(knex.fn.now())
        table.timestamp("update_at").defaultTo(knex.fn.now())
    })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("admin_login")
};