import 'reflect-metadata';
import express, {Request, Response, NextFunction} from 'express';
import "express-async-errors";
import './database';
import { router } from './routes';


const app = express();

app.use(express.json())

app.use(router); //Midware utilizado para inserir as rotas no express

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "Error",
        message: "Internal Server Error"
    })

})//Midware para tratar erros


app.listen(3000, () => console.log("Server Initialized..."));

