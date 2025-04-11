import Account from '../model/Account';
import Transaction from '../model/Transaction';
import AccountValidate from '../validation/AccountValidate';
import TransactionValidate from '../validation/TransactionValidate';

class TransactionService {
    async save(data){

        if(!(await AccountValidate.existsAccountByUser(data.account_id, data.user_id))){
            throw new Error('account does not exists for this user!');
        }

        let transactionSaved;

        switch (data.type){
            case 'debit':

                if(!(await TransactionValidate.isValidBalance(data.account_id, data.amount))){
                    throw new Error('insufficient balance');
                }

                transactionSaved = await this.#persistAccount(data);
                await this.#updateBalanceAccountTypeDebit(transactionSaved.account_id, transactionSaved.amount);
                return transactionSaved;

            case 'credit':
                transactionSaved = await this.#persistAccount(data);
                await this.#updateBalanceAccountTypeCredit(transactionSaved.account_id, transactionSaved.amount);
                return transactionSaved;
            default:
                throw new Error('type of transactions not exists');   
        }
    }


    async #persistAccount(data){

        data.amount = parseFloat(data.amount);

        const account = await Transaction.create({
            amount: data.amount,
            type: data.type,
            description: data.description,
            account_id: data.account_id
        });

        return account;

    }
    //Regras de para implementar transação de debito
    async #updateBalanceAccountTypeDebit(account_id, amount){

        const account = await Account.findByPk(account_id);
        account.balance -= amount;
        await account.save();
    }

    //Regras de para implementar transação de debito
    async #updateBalanceAccountTypeCredit(account_id, amount){

        const account = await Account.findByPk(account_id);
        account.balance += amount;   
        account.save();

    }
}

export default new TransactionService();