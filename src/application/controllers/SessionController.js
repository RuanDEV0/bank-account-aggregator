import jwt from 'jsonwebtoken';

import User from "../model/User.js";
import authenticationConfig from '../../config/authenticationConfig.js';

class SessionController {
    async store(request, response){
        const {email, password} = request.body;

        const user = await User.findOne({
            where: { email }
        });

        if(!user){
            return response.status(404).json('user not exists');
        }

        if(!(await user.checkPassword(password))){
            return response.status(401).json('password invalid!');
        }

        const { id, name} = user;

        return response.json({
            user: {
                id,
                name
            },
            token: jwt.sign({id}, authenticationConfig.secret, {
                expiresIn: authenticationConfig.expiresIn
            })
        });
    }
}

export default new SessionController();