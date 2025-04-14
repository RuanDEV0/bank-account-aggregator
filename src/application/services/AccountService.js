
import Account from "../model/Account.js";
import accountValidate from "../validation/AccountValidate.js";
import userValidate from "../validation/UserValidate.js";
import institutionValidate from "../validation/InstitutionValidate.js";

class AccountService {

    async findAll(){
        const accounts = await Account.findAll();
        return accounts;
    }

    async save(data){

        const number_account = (Math.floor(100000 + Math.random() * 900000)).toString();
        const institution_id = data.institution_id;
        const user_id = parseInt(data.user_id);

        if(!(await userValidate.existsUserById(user_id))){
            throw new Error('user not exists');
        }

        if(!(await institutionValidate.existsById(institution_id))){
            throw new Error("institution not exists");
        }

        if(await accountValidate.existsAccountByInstitution(user_id, number_account, institution_id)){
            throw new Error('Exists account this institution');
        }
        const account = {
            balance: data.balance,
            user_id,
            institution_id,
            number_account
        }
        console.log(account);

        const accountSaved = await Account.create(account);

        return accountSaved;
    }

    async findById(user_id){
        if(!(await userValidate.existsUserById(user_id))){
            throw new Error('user not exists');
        }

        const accounts = await Account.findAll({
            where: {user_id}
        });

        return accounts;
    }
}

export default new AccountService();