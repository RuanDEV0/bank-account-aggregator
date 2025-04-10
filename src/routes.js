import { Router } from 'express';

const routes = new Router();
import UserController from './application/controllers/UserController';

routes.get('/users', UserController.index)
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update)

export default routes;
