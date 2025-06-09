import Account from '../model/Account.js';
import User from '../model/User.js';
import Consent from '../model/Consent.js';
import Institution from '../model/Institution.js';
import UserValidate from '../validation/UserValidate.js';
import AccountValidate from '../validation/AccountValidate.js';
import ConsentValidate from '../validation/ConsentValidate.js';

class OpenFinanceService {
	async saveConsent({ cpf, expirationDate: expiration_date, expiration, authorization }) {
		if (!(await UserValidate.userExistsByEmailOrCpf("",cpf))) {
			throw new Error('not exists user');
		}

		const { id: user_id } = await User.findOne({
			where: {
				cpf,
			},
		});

		if (!(await AccountValidate.existsAccountByUser(user_id))) {
			throw new Error('not exists account this user');
		}

		const {
			id: account_id,
			institution_id,
			number_account: account,
			agency,
		} = await Account.findOne({
			where: {
				user_id,
			},
		});

		if(!(await ConsentValidate.existsConsent(account_id))){
			throw new Error('not exists consent for this user');
		}

		if(await ConsentValidate.existsConsent(account_id) && !(await ConsentValidate.isValid(account_id))){
			throw new Error('consent for this account is false')
		}

		const { name, image } = await Institution.findOne({
			where: {
				id: institution_id,
			},
		});

		if(await ConsentValidate.existsConsent(account_id) && await ConsentValidate.isValid(account_id)){
			return {
				sucess: true,
				message: 'Compartilhamento feito com sucesso',
				data: {
					account: {
						institutionName: name,
						image,
						account,
						agency
					}
				}
			}
		}
		await Consent.create({
			authorization,
			expiration,
			expiration_date,
			account_id,
		});

		return {
			success: true,
			message: 'Compartilhamento feito com sucesso',
			data: {
				account: {
					institutionName: name,
					image,
					account,
					agency,
				},
			},
		};
	}

	async getBalance({ account: number_account, agency }) {
		const { id: account_id, balance } = await Account.findOne({
			where: {
				number_account,
				agency,
			},
		});

		if (!(await ConsentValidate.existsConsent(account_id))) {
			throw new Error('not exists consent for this account of user');
		}

		if (!(await ConsentValidate.isValid(account_id))) {
			throw new Error('consent for this account is false');
		}

		console.log(balance);
		return {
			success: true,
			data: {
				balance,
			},
		};
	}

	async replaceConsent({ cpf, expirationDate: expiration_date, expiration, authorization }) {
		console.log(cpf);
		if (!(await UserValidate.userExistsByEmailOrCpf("", cpf))) {
			throw new Error('Usuário não encontrado');
		}
		console.log(cpf);
		const { id: user_id } = await User.findOne({ where: { cpf } });
		const {
			id: account_id,
			institution_id,
			number_account: account,
			agency,
		} = await Account.findOne({ where: { user_id } });

		if (!(await ConsentValidate.existsConsent(account_id))) {
			throw new Error('not exists consent for this account of user');
		}

		await Consent.update(
			{
				expiration_date,
				expiration,
				authorization,
			},
			{ where: { account_id } }
		);

		const { name, image } = await Institution.findByPk(institution_id);
		return {
			success: true,
			message: 'Autorizacao Alterada com Sucesso',
			data: {
				account: {
					institutionName: name,
					image,
					account,
					agency,
				},
			},
		};
	}

	async revokeConsent({ cpf, authorization }) {
		if (!(await UserValidate.userExistsByEmailOrCpf("", cpf))) {
			throw new Error('Usuário não encontrado');
		}

		console.log(cpf);
		const { id: user_id } = await User.findOne({ where: { cpf } });
		const { id: account_id } = await Account.findOne({ where: { user_id } });
		if (!(await ConsentValidate.existsConsent(account_id))) {
			throw new Error('not exists consent for this account of user');
		}

		if (!(await ConsentValidate.isValid(account_id))) {
			throw new Error('consent it is already false');
		}

		await Consent.update({ authorization }, { where: { account_id}  });

		return {
			success: true,
			message: 'Autorizacao Revogada com Sucesso'
		}
	}
}

export default new OpenFinanceService();
