const { not } = require("joi");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("subject", (table) => {
        table.increments("subj_id")
        table.string("subject_name").notNullable()
        table.integer("scl_id").unsigned()
        table.foreign("scl_id").references("school.scl_id")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("subject")
};