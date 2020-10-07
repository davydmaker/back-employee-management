import { Request, Response } from 'express'
import knex from '../database/connection'

class RolesController {
    async index(req: Request, res: Response) {
        const roles =
            await knex('roles')
                .select('*');

        return res.json(roles);
    }

    async show(req: Request, res: Response){
        const {id} = req.params;

        const role = await knex('roles').where('id', id).first();

        return res.json(role);
    }

    async create(req: Request, res: Response) {
        const {
            description
        } = req.body;

        const insertedIds = await knex('roles').insert({
            description
        });

        return res.json({
            id: insertedIds[0],
            description
        });
    }
}

export default RolesController;