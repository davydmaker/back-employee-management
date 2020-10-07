import { Request, Response } from 'express';
import knex from '../database/connection';

class RolesController {
    async index(req: Request, res: Response) {
        const roles =
            await knex('roles')
                .select('*');

        return res.json(roles);
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const role = await knex('roles').where('id', id).first();

        if (!role) {
            return res.status(400).json({ message: 'Role not found.' });
        }

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

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { description } = req.body;

        await knex('roles')
            .where('id', id)
            .update({
                description
            });

        return res.json({ success: true });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        await knex('roles')
            .where('id', id)
            .del()
            .then(status => {
                if (status === 0) return res.status(400).json({ message: "An error has occured." })
            });

        return res.json({ success: true });
    }
}

export default RolesController;