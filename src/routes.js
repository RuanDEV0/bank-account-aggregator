import { Router } from 'express';

const routes = new Router();
import UserController from './application/controllers/UserController';


routes.post('/users', UserController.save);

export default routes;
