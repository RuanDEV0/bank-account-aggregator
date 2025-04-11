import Account from "../model/Account";

class TransactionValidate {
    async isValidBalance(account_id, amount){
        const { balance } = await Account.findByPk(account_id);

        return amount > balance ? false : true;
    }
}

export default new TransactionValidate();