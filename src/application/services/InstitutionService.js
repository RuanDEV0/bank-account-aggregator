
import Institution from '../model/Institution.js';
import institutionValidate from '../validation/InstitutionValidate.js';

class InstitutionService {
    async findAll(){
        const institutions = await Institution.findAll();
        return institutions;
    }

    async save(data){
        
        if(!(await institutionValidate.isValid(data))){
            return {error: 'institution not valid, exists with this informations!'};
        }
        
        const institution = await Institution.create(data);
        return institution;
    }
}

export default new InstitutionService();