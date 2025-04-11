import userService from "../services/UserService"

class UserController{

    async index(request, response){
        const users = await userService.findAll();

        return response.send(users);
    }
    async store(request, response){
        const body = request.body;
        const userSaved = await userService.save(body);
        return response.send(userSaved);
    }

    async update(request, response){
        const { id } = request.params;
        const {name, email, cpf} = request.body;

        const userUpdatedOrError = await userService.replace({id, name, email, cpf});
        return response.send(userUpdatedOrError);
    }

    async show(request, response){
        const { id } = request.params;

        try{
            const data = await userService.totalBalance(id);
            return response.send(data);
        }catch(error){
            return response.status(400).json({error: error.message});
        }
    }
}

export default new UserController();