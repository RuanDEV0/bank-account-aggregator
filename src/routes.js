import { Router } from 'express';

const routes = new Router();
import authentication from './application/middlewares/authentication';
import UserController from './application/controllers/UserController';
import InstitutionController from './application/controllers/InstitutionController';
import AccountController from './application/controllers/AccountController';
import TransactionController from './application/controllers/TransactionController';
import SessionController from './application/controllers/SessionController';

routes.get('/users', UserController.index)
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authentication);
routes.put('/users/:id', UserController.update)

routes.get('/institutions', InstitutionController.index);
routes.post('/institutions', InstitutionController.store);


routes.post('/users/:id/accounts', AccountController.store);
routes.get('/accounts', AccountController.index);
routes.get('/users/:id/accounts', AccountController.show);

routes.post('/users/:id/transactions', TransactionController.store)

routes.get('/users/:id/balance', UserController.show);

routes.get('/users/:id/statement', UserController.showStatement);
export default routes;
