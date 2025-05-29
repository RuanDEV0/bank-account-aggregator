import Sequelize, { Model }  from "sequelize";

class Consent extends Model{
    static init(sequelize){
        super.init({
            expiration_date: Sequelize.DATE,
            expiration: Sequelize.BOOLEAN,
            authorization: Sequelize.BOOLEAN
        }, { sequelize });

        return this;
    }
    
    static associate(models){
        this.belongsTo(models.Account, { foreignKey: 'account_id', as: 'account'})
    }
}



export default Consent