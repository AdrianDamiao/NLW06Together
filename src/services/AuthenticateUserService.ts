import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs' //Compara as senhas digitadas com as geradas com hash
import { UsersRepository } from '../repositories/UsersRepository';
import { sign } from 'jsonwebtoken';

interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticateUserService{

    async execute({email, password}: IAuthenticateRequest){

        //verificar se o email existe
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findOne({
            email
        });

        if(!user){
            throw new Error("Email/Password incorrect") //Deixar maliciosos em dúvida
        }

        //Verificar se a senha está correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/Password incorrect")
        }
        
        //Gerar o token
        const token = sign(
            {
                email: user.email,
            }, 
            "7cb7718ac104af1b8fba4998fb6ab9e6", 
            {
                subject: user.id,
                expiresIn: "1d" //O ideal seria ter um tempo de expiração baixo com um Refresh Token
            }
        );

            return token;
    }
}

export {AuthenticateUserService}