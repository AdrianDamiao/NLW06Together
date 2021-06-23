import express, { Router } from "express";
import { CreateUserController } from '../src/controllers/CreateUserController'

const router = Router();

const createUserController = new CreateUserController();

router.post("/users", createUserController.handle)

router.get('/', (request, response) => {
    //Request => Entrando
    //Response => Saindo
   return response.send("Get para Home") //Colocar o return é aconselhado
});

router.post('/post', (request, response) => {

    return response.send("Post em Home")
});


export  { router }