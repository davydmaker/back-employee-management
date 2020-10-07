import Knex from 'knex'

export async function seed(knex: Knex){
    await knex('employees').insert([
        {
            role_id: 1,
            first_name: 'Davyd Felipe',
            last_name: 'Medeiros do Nascimento',
            birthday: '2000-11-08',
            salary: ''
        },
    ]);
}