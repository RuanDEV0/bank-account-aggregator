import { Op } from "sequelize";

/* [Op.or] module encontrado para verificar se existe uma instituição com algum atributo iqual,
   já que todos os atributos são únicos */

import Institution from '../model/Institution.js';

class InstitutionValidate {

    async existsById(id){
        const institution = await Institution.findByPk(id);

        return !institution ? false : true;
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

    async existsByName(name){
        const institution = await Institution.findOne({
            where: {
                name
            }
        });

        return !institution ? false : true;
    }
}

export default new InstitutionValidate();