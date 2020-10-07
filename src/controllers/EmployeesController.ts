import { Request, Response } from 'express';
import knex from '../database/connection';

class EmployeesController {
    async index(req: Request, res: Response) {
        const employees =
            await knex.select('employees.*', 'roles.description')
                .from('employees')
                .innerJoin('roles', 'roles.id', 'employees.role_id');

        const serializedEmployees = employees.map(employee => {
            return {
                id: employee.id,
                first_name: employee.first_name,
                last_name: employee.last_name,
                birthday: employee.birthday,
                salary: employee.salary,
                role: {
                    id: employee.role_id,
                    description: employee.description
                },
            }
        });

        return res.json(serializedEmployees);
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const employee = await knex('employees').where('id', id).first();

        if (!employee) {
            return res.status(400).json({ message: 'Employee not found.' });
        }

        return res.json(employee);
    }

    async create(req: Request, res: Response) {
        const {
            role_id,
            first_name,
            last_name,
            birthday,
            salary,
        } = req.body;

        const employee = {
            role_id,
            first_name,
            last_name,
            birthday,
            salary,
        };

        const insertedIds = await knex('employees').insert(employee);

        return res.json({
            id: insertedIds[0],
            ...employee,
        });
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { first_name, last_name, birthday, salary, role_id } = req.body;

        await knex('employees')
            .where('employees.id', id)
            .update({
                first_name,
                last_name,
                birthday,
                salary,
                role_id
            });

        return res.json({ success: true });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        await knex('employees')
            .where('id', id)
            .del()
            .then(status => {
                if (status === 0) return res.status(400).json({ message: "An error has occurred." })
            });

        return res.json({ success: true });
    }

}

export default EmployeesController;