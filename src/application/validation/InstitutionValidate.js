import { Op } from "sequelize";

import Institution from "../model/Institution"

class InstitutionValidate {

    async existsById(id){
        const user = await Institution.findByPk(id);

        return !user ? false : true;
    }
    
    async isValid(body){

        const institution = await Institution.findOne({
            where: {
                [Op.or]: [
                    {name: body.name},
                    {cnpj: body.cnpj},
                    {email: body.email},
                    {phone: body.phone}
                ]
            }
        });

        return !institution ? true : false;
    }
}

export default new InstitutionValidate();