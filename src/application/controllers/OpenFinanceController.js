import OpenFinanceService from '../services/OpenFinanceService.js';
import transactionOpenFinance from '../services/TransactionOpenFinanceService.js';

class OpenFinanceController {
	async saveConsent(req, res) {
		try {
			const { cpf, expirationDate, expiration, authozation } = req.body;

			const data = await OpenFinanceService.saveConsent({
				cpf,
				expirationDate,
				expiration,
				authozation,
			});
			return res.status(200).json(data);
		} catch (error) {
			console.log(error);
			return res.status(400).json({ error: error.message });
		}
	}

	async replaceConsent(req, res) {
		const { action } = req.params;
		const { cpf } = req.body;
		try {
			if (action === 'update') {
				const { expirationDate, expiration, authorization } = req.body;
				
				const data = await OpenFinanceService.replaceConsent({
					cpf,
					expirationDate,
					expiration,
					authorization,
				});
				return res.status(200).json(data);
			}

			if (action === 'revoked') {

				const { authorization } = req.body;
				const data = await OpenFinanceService.revokeConsent({ cpf, authorization});
				return res.status(200).json(data);
				
			}
		} catch (error) {
			return res.status(400).json({ message: error.message });
		}
	}

	async getBalance(req, res) {
		const { account, agency } = req.query;
		try {
			const data = await OpenFinanceService.getBalance({ account, agency });
			return res.status(200).json(data);
		} catch (error) {
			console.log(error);
			return res.status(400).json({ error: error.message });
		}
	}

	async saveTransaction(req, res) {
		const { account, agency, amount } = req.body;
		try {
			const data = await transactionOpenFinance({ account, agency, amount });
			return res.status(200).json(data);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	}
}

export default new OpenFinanceController();
