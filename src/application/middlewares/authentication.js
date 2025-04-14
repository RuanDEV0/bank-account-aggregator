import { promisify } from 'util';

import jwt from 'jsonwebtoken';

import authenticationConfig from '../../config/authenticationConfig.js';
export default async (request, response, next) => {
    const authHeader = request.headers.authorization;
    
    if(!authHeader){
        return response.status(401).json({ error: 'token not exists' });
    }

    const [ , token] = authHeader.split(' ');

    try{

    await promisify(jwt.verify)(token, authenticationConfig.secret);

    return next();

    }catch(error){
        console.log(error);
        return response.status(400).json({ error: error.message });
    }
}