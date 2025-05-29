import { Router } from 'express';

const routes = new Router();
import authentication from './application/middlewares/authentication.js';
import UserController from './application/controllers/UserController.js';
import InstitutionController from './application/controllers/InstitutionController.js';
import AccountController from './application/controllers/AccountController.js';
import TransactionController from './application/controllers/TransactionController.js';
import SessionController from './application/controllers/SessionController.js';
import ValidateUserInput from './application/middlewares/ValidateUserInput.js';
import ValidateTransactionInput from './application/middlewares/ValidateTransactionInput.js';
import ValidateSessionInput from './application/middlewares/ValidateSessionInput.js';
import ValidateAccountInput from './application/middlewares/ValidateAccountInput.js';
import ValidateInstitutionInput from './application/middlewares/ValidateInstitutionInput.js';
import OpenFinanceController from './application/controllers/OpenFinanceController.js';
import ValidateAction from './application/middlewares/ValidateAction.js';

routes.get('/users', UserController.index)
routes.post('/users', ValidateUserInput.validateBodyPost,UserController.store);
routes.post('/sessions', ValidateSessionInput.validateBodyPost, SessionController.store);

routes.get('/institutions', InstitutionController.index);
routes.post('/institutions', ValidateInstitutionInput.validateBodyPost, InstitutionController.store);

routes.post('/openfinance', OpenFinanceController.saveConsent);
routes.patch('/openfinance/:action', ValidateAction.checkAction, OpenFinanceController.replaceConsent);
routes.get('/openfinance', OpenFinanceController.getBalance);
routes.post('/openfinance/transaction', OpenFinanceController.saveTransaction);

routes.use(authentication);
routes.put('/users/:id', ValidateUserInput.validateBodyPut, UserController.update)



routes.post('/users/:id/accounts', ValidateAccountInput.validateBodyPost, AccountController.store);
routes.get('/accounts', AccountController.index);
routes.get('/users/:id/accounts', AccountController.show);

routes.post('/users/:id/transactions', ValidateTransactionInput.validateBodyPost, TransactionController.store)

routes.get('/users/:id/balance', UserController.show);

routes.get('/users/:id/statement', UserController.showStatement);
export default routes;
