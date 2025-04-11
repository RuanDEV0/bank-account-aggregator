import { Router } from 'express';

const routes = new Router();
import UserController from './application/controllers/UserController';
import InstitutionController from './application/controllers/InstitutionController';
import AccountController from './application/controllers/AccountController';
import TransactionController from './application/controllers/TransactionController';

routes.get('/users', UserController.index)
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update)

routes.get('/institutions', InstitutionController.index);
routes.post('/institutions', InstitutionController.store);


routes.post('/users/:id/accounts', AccountController.store);
routes.get('/accounts', AccountController.index);
routes.get('/users/:id/accounts', AccountController.show);

routes.post('/users/:id/transactions', TransactionController.store)
export default routes;
