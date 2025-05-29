import Sequelize, { Model } from 'sequelize';

class TransactionOpenFinance extends Model {
    static init(sequelize) {
        super.init(
            {
                amount: Sequelize.FLOAT,
                agency: Sequelize.STRING,
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

export default TransactionOpenFinance;
