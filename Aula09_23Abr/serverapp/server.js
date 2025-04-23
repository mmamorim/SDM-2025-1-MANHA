import express from 'express';
import bodyParser from 'body-parser'
import db from "./clapback.js"

const server = express();
server.use(bodyParser.json());       // suporte para JSON-encoded bodies
server.use(bodyParser.urlencoded({     // suporte para URL-encoded bodies
    extended: true
}));

await db.init("banco.json")

server.get('/',(req, res) => {
    res.send('🙋‍♂️ Oi gente...vc acessou a raiz /');
});

server.get('/frutas',(req, res) => {
    let dados = db.get("/frutas")
    console.log("frutas: ",dados);
    res.json(dados);
});

server.get('/frutas/:id',(req, res) => {
    console.log("O que ele passou no id?",req.params.id);
    let dados = db.get("/frutas/"+req.params.id)
    res.json(dados);
});

server.get('/verduras',(req, res) => {
    let dados = db.get("/verduras")
    console.log("verduras: ",dados);
    res.json(dados);
});

server.listen(3001, () => {
    console.log('Server escutando na porta 3001');
});