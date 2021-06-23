import {Request, Response} from 'express';
import { CreateUserService} from '../services/CreateUserService'

class CreateUserController{
    //O nosso controller recebe a requisição e enviar para o service
    async handle(request: Request, response: Response){
        const { name, email, admin} = request.body; 

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ name, email, admin});

        return response.json(user);
    }

}

export { CreateUserController }