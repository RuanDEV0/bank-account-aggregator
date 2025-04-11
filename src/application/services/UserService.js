import Account from '../model/Account';
import User from '../model/User';
import userValidate from '../validation/UserValidate';

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
        const accounts = await Account.findAll({where: {
            user_id
        }})

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