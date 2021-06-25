import express, { Router } from "express";
import { CreateUserController } from '../src/controllers/CreateUserController'
import { CreateTagController } from '../src/controllers/CreateTagController';
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from '../src/controllers/AuthenticateUserController'
import { CreateComplimentController} from '../src/controllers/CreateComplimentController'

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const authenticateUserController = new AuthenticateUserController();

// router.use(ensureAdmin);  Se eu utilizar assim, todas as rotas abaixo terão obrigatoriamente que passar pelo midlleware. Por isso se deve passar na rota
router.post("/users", createUserController.handle)
router.post("/tags", createTagController.handle)
router.post("/compliments", ensureAdmin, createComplimentController.handle)
router.post('/auth', ensureAdmin ,authenticateUserController.handle)

router.get('/', (request, response) => {
   return response.send("Get para Home") //Colocar o return é aconselhado
});

router.post('/post', (request, response) => {
    return response.send("Post em Home")
});


export  { router }