
import InstitutionService from "../services/InstitutionService";

class InstitutionController {
    async index(request, response){
        const institutions = await InstitutionService.findAll();
        return response.send(institutions);
    }

    async store(request, response){
        const {name, phone, cnpj, email} = request.body;

        const institutionSavedOrError = await InstitutionService.save({
            name,
            phone,
            cnpj,
            email
        })

        return response.send(institutionSavedOrError);
    }
}

export default new InstitutionController();