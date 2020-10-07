import express from 'express';

import EmployeesControlller from './controllers/EmployeesController';
import RolesController from './controllers/RolesController';

const routes = express.Router();
const employeesController = new EmployeesControlller();
const rolesController = new RolesController();

// Employees Routes
routes.get('/employees', employeesController.index);
routes.get('/employees/:id', employeesController.show);
routes.post('/employees', employeesController.create);
routes.put('/employees/:id', employeesController.update);
routes.delete('/employees/:id', employeesController.delete);

// Roles Routes
routes.get('/roles', rolesController.index);
routes.get('/roles/:id', rolesController.show);
routes.post('/roles', rolesController.create);
// routes.put('/roles', rolesController.update);
// routes.delete('/roles', rolesController.delete);

export default routes;