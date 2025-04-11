import accountService from '../services/AccountService'

class AccountController {
    async index(request, response){
        const accounts = accountService.findAll();

        return response.send(accounts);
    }

    async store(request, response){
        const { id: user_id } = request.params;
        const {institution_id, balance} = request.body;

        const accountSavedOrError = await accountService.save({
            user_id,
            institution_id,
            balance
        });

        return response.send(accountSavedOrError);
    }

    async show(request, response){
        const { id: user_id } = request.params;
        
        const accounts = await accountService.findById(user_id);

        return response.send(accounts);
    }
}

export default new AccountController();