import Sequelize, { Model } from 'sequelize';

class Transaction extends Model {
	static init(sequelize) {
		super.init(
			{
				amount: {
					type: Sequelize.DECIMAL(15, 2),
					allowNull: false,
				},
				type: {
					type: Sequelize.ENUM('credit', 'debit'),
					allowNull: false,
				},
				description: Sequelize.TEXT,
				date: {
					type: Sequelize.DATE,
					defaultValue: Sequelize.NOW,
				},
			},
			{
				sequelize,
				tableName: 'transactions',
			}
		);
		return this;
	}

	static associate(models) {
		this.belongsTo(models.ACCOUNT, { foreignKey: 'account_id', as: 'account' });
	}
}

export default Transaction;
