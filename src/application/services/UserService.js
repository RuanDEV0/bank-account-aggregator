import User from '../model/User';

class UserService{

    async save(data){
        const {name, email, cpf} = await User.create(data);
        return { name, email, cpf};
    }
}

export default new UserService();