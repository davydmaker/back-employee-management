import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('employees', table => {
        table.increments('id').primary();
        table.integer("role_id")
            .notNullable()
            .references('id')
            .inTable('roles');
        table.string('first_name',100).notNullable();
        table.string('last_name',100).notNullable();
        table.date('birthday').notNullable();
        table.double('salary').notNullable();
    });
}

export async function down(Knex: Knex) {
    return Knex.schema.dropTable('employees');
}