import Account from '../model/Account.js';
import TransactionValidate from '../validation/TransactionValidate.js';
import ConsentValidate from '../validation/ConsentValidate.js';

export default async function transactionOpenFinance({ account, amount, agency }) {
	const accountSaved = await Account.findOne({
		where: {
			number_account: account,
			agency
		},
	});

	if (!accountSaved) {
		throw new Error('not exists account');
	}

	if (!(await ConsentValidate.existsConsent(accountSaved.id))) {
		throw new Error('not exists consent this account');
	}
	if (!(await ConsentValidate.isValid(accountSaved.id))) {
		throw new Error('authorization of consent is false');
	}

	if (!(await TransactionValidate.isValidBalance(accountSaved.id, amount))) {
		throw new Error('insufficient balance');
	}

	accountSaved.balance = parseFloat(accountSaved.balance);
	amount = parseFloat(amount);

	accountSaved.balance -= amount;

	accountSaved.save();

	return {
		success: true,
		message: 'Transacao feita com sucesso',
		data: {
			balance: accountSaved.balance,
		},
	};
}
