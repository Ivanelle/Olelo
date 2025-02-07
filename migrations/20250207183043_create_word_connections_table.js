/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    table.increments('id').primary(); // Primary key
    table.integer('word_id').unsigned().notNullable(); // Foreign key to `words` table
    table.integer('connected_word_id').unsigned().notNullable(); // Foreign key to `words` table
    table.string('relationship_type').notNullable(); // Type of relationship (e.g., "synonym")
    table.timestamps(true, true); // Adds `created_at` and `updated_at`

    // Foreign key constraints
    table.foreign('word_id').references('id').inTable('words').onDelete('CASCADE');
    table.foreign('connected_word_id').references('id').inTable('words').onDelete('CASCADE');

    // Ensure no duplicate connections
    table.unique(['word_id', 'connected_word_id']);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('word_connections');
};
