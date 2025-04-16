import Account from '../model/Account.js';
import User from '../model/User.js';
import userValidate from '../validation/UserValidate.js';
import institutionValidate from '../validation/InstitutionValidate.js';
import Institution from '../model/Institution.js';
import AccountValidate from '../validation/AccountValidate.js';
import Transaction from '../model/Transaction.js';

class UserService{

    async findAll(){
        return await User.findAll({
            attributes: ['id', 'name', 'email', 'cpf']
        });
    }

    async save(data){
   
        const existsUser = await userValidate.userExistsByEmailOrCpf(data.email, data.cpf); 

        if(existsUser){
            return {error: 'user exists'};
        }

        const {id, name, email, cpf} = await User.create(data);
        return { id ,name, email, cpf};
    }

    async replace(data){

        if(!(await userValidate.existsUserById(data.id))){
            return {error: 'not exists user with this id'};
        }

        const existsUser = await userValidate.userExistsByEmailOrCpf(data.email, data.cpf);
        if(existsUser){
            return {error: 'user exists'};
        }

        const user = await User.findByPk(data.id);

        user.name = data.name;
        user.email = data.email;
        user.cpf = data.cpf;

        console.log(user);

        const { name, email, cpf } = await user.save();

        return {name, email, cpf};
    }

    async totalBalance(user_id){

        if(!(await AccountValidate.existsAccountByUser(user_id))){
            throw new Error('not exists account this user');
        }

        const accounts = await Account.findAll({where: {
            user_id
        }})

        const balances = accounts.map(account => account.balance);
        const totalBalance = balances.reduce((acc, balance) => acc + balance, 0);
        
        const {name, cpf } = await User.findByPk(user_id);

        return {
            name,
            cpf,
            totalBalance
        }
    }

    async totalBalanceByInstitution(user_id, institution){

        if(!(await institutionValidate.existsByName(institution))){
            throw new Error('Institution not exits!');
        }

        const institutionSaved = await Institution.findOne({where:{name:institution}});

        const accounts = await Account.findAll({
            where: {
                user_id,
                institution_id: institutionSaved.id
            }
        });

        if(!accounts){
            throw new Error('not exists account this user');
        }

        const balances = accounts.map(account => account.balance);
        const totalBalance = balances.reduce((acc, balance) => acc + balance, 0);
        
        const {name, cpf } = await User.findByPk(user_id);

        return {
            name,
            cpf,
            totalBalance
        }


    }

    async findTransactions(user_id){
        if(!(await AccountValidate.existsAccountByUser(user_id))){
            throw new Error('not exists account this user');
        }

        const transactions = await Transaction.findAll({
            include: {
                model: Account,
                as: 'account',
                where: {
                    user_id
                },
                attributes: ['institution_id', 'number_account']
            }
        });

        return transactions;
    }

    async findTransactionsByInstitution(user_id, nameInstitution){
        if(!(await institutionValidate.existsByName(nameInstitution))){
            throw new Error('not exits this institution');
        }

        if(!(await AccountValidate.existsAccountByUser(user_id))){
            throw new Error('not exists account this user!');
        }

        const { id: institution_id } = await Institution.findOne({
            where: {
                name: nameInstitution
            }
        });


        const transactions = await Transaction.findAll({
            include: {
                model: Account,
                as: 'account',
                where: {
                    user_id,
                    institution_id
                },
                attributes: ['institution_id', 'number_account']
            }
        });

        return transactions;
    }

    async findTransactionsByType(user_id, type){

        if(!(await AccountValidate.existsAccountByUser(user_id))){
            throw new Error('not exists account this user!');
        }

        const transactions = await Transaction.findAll({
            where: { type }
        });

        return transactions;
    }

    async findTransactionsByInstitutionAndType(user_id, nameInstitution, type){
        if(!(await institutionValidate.existsByName(nameInstitution))){
            throw new Error('not exits this institution');
        }

        if(!(await AccountValidate.existsAccountByUser(user_id))){
            throw new Error('not exists account this user!');
        }

        const { id: institution_id } = await Institution.findOne({
            where: {
                name: nameInstitution
            }
        });


        const transactions = await Transaction.findAll({
            where: {
                type
            },
            include: {
                model: Account,
                as: 'account',
                where: {
                    user_id,
                    institution_id
                },
                attributes: ['institution_id', 'number_account']
            }
        });

        return transactions;
    }
}

export default new UserService();