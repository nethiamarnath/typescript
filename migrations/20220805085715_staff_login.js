/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("staff_login", (table) => {
        table.increments("id")
        table.string("access_token")
        table.string("refress_token")
        table.timestamp("create_at").defaultTo(knex.fn.now())
        table.timestamp("update_at").defaultTo(knex.fn.now())
    })
};
// 5. Staff Access Tokens (id,User_id, Access-Token, Refresh-Token,….)

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("staff_login")
};