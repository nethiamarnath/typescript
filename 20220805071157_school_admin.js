/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("school_admin", (table) => {
        table.increments("admin_id")
        table.integer("Role_id").unsigned()
        table.foreign("Role_id").references("roles.Role_id")
        table.string("Name").notNullable()
        table.string("phone_no").notNullable()
        table.string("email").notNullable()
        table.string("password").notNullable()
        table.boolean("status").notNullable()
        table.integer("scl_id")
        table.string("salt")
        table.string("forget_password_token")
        table.timestamp("create_at").defaultTo(knex.fn.now())
        table.timestamp("update_at").defaultTo(knex.fn.now())
    })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("school_admin")


};