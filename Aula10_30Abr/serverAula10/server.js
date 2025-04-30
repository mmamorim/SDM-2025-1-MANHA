import express from 'express';
import bodyParser from 'body-parser'
import cors from "cors"
import db from "@mmamorim/clapback"

const server = express();
server.use(bodyParser.json());       // suporte para JSON-encoded bodies
server.use(bodyParser.urlencoded({     // suporte para URL-encoded bodies
    extended: true
}));
server.use(cors())

const PORT = 3000

await db.init({ dbFileName: 'db.json' })
server.use("/clapback", db.serve(PORT)) 

server.get('/', (req, res) => {
    res.send('🙋‍♂️ Oi gente...você acessou a raiz /');
});

server.get('/frutas', (req, res) => {
    console.log("🙋 Recebi requisição GET em /frutas");    
    let dados = db.get("/frutas")
    res.json(dados);
});

server.get('/frutas/:id', (req, res) => {
    console.log("🙋 Recebi requisição GET em /frutas/:id")  
    console.log("o que tem no req.params",req.params)  
    let dados = db.get("/frutas/"+req.params.id)
    res.json(dados);
});

server.post('/frutas/:id', (req, res) => {
    console.log("🙋 Recebi requisição POST em /frutas/:id")  
    console.log("o que tem no req.params",req.params)  
    console.log("o que tem no req.body",req.body)
    let elem = {
        id: req.params.id,
        nome: req.body.nome,
        cor: req.body.cor
    }  
    console.log("elem: ",elem);    
    db.set("/frutas/"+req.params.id, elem)
    res.json({ msg: "ok", elem });
});

server.listen(PORT, () => {
    console.log('Server escutando na porta '+PORT);
});