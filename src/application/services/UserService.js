import Account from '../model/Account';
import User from '../model/User';
import userValidate from '../validation/UserValidate';
import institutionValidate from '../validation/InstitutionValidate';
import Institution from '../model/Institution';
import AccountValidate from '../validation/AccountValidate';

class UserService{

    async findAll(){
        return await User.findAll();
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
}

export default new UserService();