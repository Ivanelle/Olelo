/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable ('words', (table) => {
        table.increments('id').primary();
        table.string('hawaiianWord').notNullable();
        table.string('englishTranslation').notNullable();
        table.string('type').notNullable();
        table.string('pronunciation').notNullable();
        table.string('soundsLike');
        table.text('example');
        table.timestamp(true, true)
    }
    )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('words');
};
