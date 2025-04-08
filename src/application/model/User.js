import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

class User extends Model{
    static init(sequelize){
        super.init({
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true 
            },
            password: Sequelize.STRING

        }, {
            sequelize,
            tableName: 'users'
        });

        this.addHook('beforeSave', async (User) => {
            User.password = await bcrypt.hash(User.password, 7);
        });

        return this;
    }

    checkPassword(password){
        return bcrypt.compare(password, this.password);
    }
}

export default User;