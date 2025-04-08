import { Sequelize } from "sequelize";
import databaseConfig from '../config/database';
import User from '../application/model/User';
import Transaction from '../application/model/Transaction';
import Institution from '../application/model/Institution';
import Account from '../application/model/Account';

const models = [User, Transaction, Institution, Account];
class Database{
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(databaseConfig);
        models.map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
}

export default new Database();