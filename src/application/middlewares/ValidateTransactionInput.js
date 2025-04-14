import * as Yup from 'yup';

class ValidateTransactionInput {

    async validateBodyPost(request, response, next){
        const schema = Yup.object().shape({
            account_id: Yup.number().required(),
            amount: Yup.number().required(),
            type: Yup.string().oneOf(['debit', 'credit'], 'type is "debit" or "credit"').required(),
            description: Yup.string()
        });
        
        if(!(await schema.isValid(request.body))){
            return response.status(400).json({error: 'invalid body'});
        }

        return next();
    }

}

export default new ValidateTransactionInput();