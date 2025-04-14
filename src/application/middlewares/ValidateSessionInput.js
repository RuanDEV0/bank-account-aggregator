import * as Yup from 'yup';

class ValidateSessionInput {
    async validateBodyPost(request, response, next){
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6)
        })

        if(!(await schema.isValid(request.body))){
            return response.status(400).json({error: 'invalid body'});
        }

        return next();
    }
}

export default new ValidateSessionInput();