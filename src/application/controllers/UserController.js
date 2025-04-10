import UserService from "../services/UserService"

class UserController{
    async save(request, response){
        const body = request.body;
        const userSaved = await UserService.save(body);
        return response.json(userSaved);
    }
}

export default new UserController();