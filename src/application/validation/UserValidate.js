import { Op } from  'sequelize';

import User from "../model/User";

class UserValidate{

    async existsUserById(id){
        const user = await User.findByPk(id);

        return !user ? false : true;
    }

    async userExistsByEmailOrCpf(email, cpf) {

        const user = await User.findOne({
            where: {
                [Op.or]: [
                    { email},
                    { cpf}
                ]
            }
        });
        return !user ? false : true;
  }
  
}

export default new UserValidate();