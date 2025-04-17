import * as Yup from 'yup';

class ValidateInstitutinoInput {
    async validateBodyPost(request, response, next){
        const schema = Yup.object().shape({
            name: Yup.string().required().min(2),
            phone: Yup.string().strict().required(),
            cnpj: Yup.string().strict().required(),
            email: Yup.string().email().required()
        });

        if(!(await schema.isValid(request.body))){
            return response.status(400).json({error: 'invalid body'});
        }

        return next();

    }
}

export default new ValidateInstitutinoInput();