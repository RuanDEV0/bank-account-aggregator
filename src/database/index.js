import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database.js';
import User from '../application/model/User.js';
import Transaction from '../application/model/Transaction.js';
import Institution from '../application/model/Institution.js';
import Account from '../application/model/Account.js';
import Consent from '../application/model/Consent.js';
import TransactionOpenFinance from '../application/model/TransactionOpenFinance.js';

const models = [User, Transaction, Institution, Account, Consent, TransactionOpenFinance];
class Database {
	constructor() {
		this.init();
	}

	init() {
		this.connection = new Sequelize(databaseConfig);
		models
			.map(model => model.init(this.connection))
			.map(model => model.associate && model.associate(this.connection.models));
	}
}

export default new Database();
