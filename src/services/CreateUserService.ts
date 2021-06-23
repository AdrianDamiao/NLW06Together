import { UsersRepository } from "../repositories/UsersRepository";

interface IUserRequest{
    name: string;
    email: string;
    admin: boolean;
}

class CreateUserService {
 
    async execute({name, email, admin} : IUserRequest){
        const usersRepository = new UsersRepository();
        
        if(!email){ //Melhorar
            throw new Error("Email Incorrect!");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists){ //Melhorar a tratavida de erro
            throw new Error("User Already Exists!");
        }

        const user = usersRepository.create({
            name,
            email,
            admin
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };