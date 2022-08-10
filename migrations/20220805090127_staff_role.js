/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("staff_role", (table) => {
        table.increments("id")
        table.integer("staff_id").unsigned()
        table.integer("Role_id").unsigned()
        table.foreign("Role_id").references("roles.Role_id")
        table.foreign("staff_id").references("staff.staff_id")
        table.timestamp("create_at").defaultTo(knex.fn.now())
        table.timestamp("update_at").defaultTo(knex.fn.now())
    })
};
// 6. New table StaffRole (staff_id,RoleID)


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("staff_role")
};