import express from 'express';
import bodyParser from 'body-parser'
import cors from "cors"
import swaggerUi from 'swagger-ui-express'
import db from "@mmamorim/clapback"
import * as dotenv from 'dotenv'
dotenv.config()




const server = express();
server.use(bodyParser.json());       // suporte para JSON-encoded bodies
server.use(bodyParser.urlencoded({     // suporte para URL-encoded bodies
    extended: true
}));
server.use(cors())

const PORT = process.env.PORT || 3000;
console.log("PORT", PORT);

await db.init({ server, port: PORT, dbFileName: 'db.json' })

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, { swaggerOptions: { url: '/clapback/apidocjson' } }));

export { server, db, PORT }