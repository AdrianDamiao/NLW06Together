import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { hash } from "bcryptjs";

interface IUserRequest{
    name: string;
    email: string;
    admin: boolean;
    password: string;
}

class CreateUserService {
 
    async execute({name, email, admin = false, password} : IUserRequest){
        const usersRepository = getCustomRepository(UsersRepository)// new UsersRepository(); -> não pode ser utilizado pois o repositório é custom
        
        if(!email){ //Melhorar
            throw new Error("Email Incorrect!");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists){ //Melhorar a tratavida de erro
            throw new Error("User Already Exists!");
        }
        
        const passwordHash = await hash(password, 7);

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash, //Passado dessa forma pois o valor é diferente
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };