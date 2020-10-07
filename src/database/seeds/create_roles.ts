import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('roles').insert([
        { description: 'Desenvolvedor React.js Pleno' },
    ]);
}