
import Account from '../model/Account';

class AccountValidate {
    async existsAccountByInstitution(user_id, number_account, institution_id){
        const accountExists = await Account.findOne({
            where: {
                user_id,
                number_account,
                institution_id
            }
        });


        return !accountExists ? false : true;
    }

    async existsAccountByUser(id, user_id){
        const accountExists = await Account.findOne({
            where: {
                id,
                user_id
            }
        });

        return !accountExists ? false : true;
    }

    async existsAccountById(id){
        const accountExists = await Account.findByPk(id);
        return !accountExists ? false : true;
    }

}

export default new AccountValidate();