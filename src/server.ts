import express from 'express';
import 'reflect-metadata';
import './database';
import { router } from './routes'

const app = express();

app.use(express.json())

app.use(router); //Midware utilizado para inserir as rotas no express

app.listen(3000, () => console.log("Server Initialized..."));

