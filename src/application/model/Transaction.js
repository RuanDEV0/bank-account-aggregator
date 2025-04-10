import Sequelize, { Model } from 'sequelize';

class Transaction extends Model {
	static init(sequelize) {
		super.init(
			{
				amount: Sequelize.DECIMAL(15, 2),
				type: Sequelize.ENUM('credit', 'debit'),
				description: Sequelize.TEXT
			},
			{
				sequelize
			}
		);
		return this;
	}

	static associate(models) {
		this.belongsTo(models.Account, { foreignKey: 'account_id', as: 'account' });
	}
}

export default Transaction;
