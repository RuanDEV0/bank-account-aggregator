import Sequelize, { Model } from 'sequelize';

class Institution extends Model{
    static init(sequelize){
        super.init({
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            cnpj: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            phone: {
                type: Sequelize.SRING,
                allowNull: false,
                unique: true
            }
        }, {
            sequelize,
            tableName: 'institutions'
        });

        return this;
    }
}

export default Institution;