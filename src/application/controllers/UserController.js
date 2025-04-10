import userService from "../services/UserService"

class UserController{

    async index(request, response){
        const users = await userService.findAll();

        return response.json(users);
    }
    async store(request, response){
        const body = request.body;
        const userSaved = await userService.save(body);
        return response.json(userSaved);
    }

    async update(request, response){
        const { id } = request.params;
        const {name, email, cpf} = request.body;

        const userUpdatedOrError = await userService.replace({id, name, email, cpf});
        return response.json(userUpdatedOrError);
    }
}

export default new UserController();