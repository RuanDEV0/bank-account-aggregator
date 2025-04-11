
import Institution from '../model/Institution';
import institutionValidate from '../validation/InstitutionValidate';

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