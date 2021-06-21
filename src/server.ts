import express from 'express';

const app = express();

app.get('/', (request, response) => {
    //Request => Entrando
    //Response => Saindo
   return response.send("Get para Home") //Colocar o return é aconselhado
});

app.post('/post', (request, response) => {

    return response.send("Post em Home")
});

app.listen(3000, () => console.log("Server Initialized..."));

