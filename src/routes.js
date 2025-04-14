import { Router } from 'express';

const routes = new Router();
import authentication from './application/middlewares/authentication';
import UserController from './application/controllers/UserController';
import InstitutionController from './application/controllers/InstitutionController';
import AccountController from './application/controllers/AccountController';
import TransactionController from './application/controllers/TransactionController';
import SessionController from './application/controllers/SessionController';
import ValidateUserInput from './application/middlewares/ValidateUserInput';
import ValidateTransactionInput from './application/middlewares/ValidateTransactionInput';
import ValidateSessionInput from './application/middlewares/ValidateSessionInput';
import ValidateAccountInput from './application/middlewares/ValidateAccountInput';
import ValidateInstitutionInput from './application/middlewares/ValidateInstitutionInput';

routes.get('/users', UserController.index)
routes.post('/users', ValidateUserInput.validateBodyPost,UserController.store);
routes.post('/sessions', ValidateSessionInput.validateBodyPost, SessionController.store);

routes.get('/institutions', InstitutionController.index);
routes.post('/institutions', ValidateInstitutionInput.validateBodyPost, InstitutionController.store);

routes.use(authentication);
routes.put('/users/:id', ValidateUserInput.validateBodyPut, UserController.update)



routes.post('/users/:id/accounts', ValidateAccountInput.validateBodyPost, AccountController.store);
routes.get('/accounts', AccountController.index);
routes.get('/users/:id/accounts', AccountController.show);

routes.post('/users/:id/transactions', ValidateTransactionInput.validateBodyPost, TransactionController.store)

routes.get('/users/:id/balance', UserController.show);

routes.get('/users/:id/statement', UserController.showStatement);
export default routes;
