import Sequelize, { Model } from 'sequelize';


class Account extends Model{
    static init(sequelize){
        super.init({
            numberAccount: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            balance: Sequelize.DECIMAL(15,2),
        }, {
            sequelize,
            tableName: 'accounts'
        })

        return this;
    }

    static associate(models){
        this.belongsTo(models.USER, {foreignKey: 'user_id', as: 'user'});
        this.belongsTo(models.INSTITUTION, {foreignKey: 'institution_id', as: 'institution'})
    }
}

export default Account;