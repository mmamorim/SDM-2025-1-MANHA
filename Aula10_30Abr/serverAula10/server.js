import express from 'express';
import bodyParser from 'body-parser'
import cors from "cors"
import db from "@mmamorim/clapback"
import frutasRota from './frutas_rota.js';

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

frutasRota(server,db)

server.listen(PORT, () => {
    console.log('Server escutando na porta '+PORT);
});