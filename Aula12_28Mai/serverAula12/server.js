import { server, db, PORT } from "./initServer.js"
import rotasFrutas from "./rotasFrutas.js";
import rotasUsuarios from "./rotasUsuarios.js";
import auth from "./auth.js"

let middleware = auth(server, db)

server.get('/', (req, res) => {
    res.send('🙋‍♂️ Hello...route /');
});

rotasFrutas(server, db)
rotasUsuarios(server, db)

async function middlewareTeste(req, res, next) {
    console.log('Eu sou um middleware!!!!!')
    if(parseInt(Math.random()*2) == 0) {
        next()
    } else {
        res.send('PROBLEMA!')
    }
}

server.get('/teste', middlewareTeste, (req, res) => {
    res.send('🔥🔥🔥 ROTA /teste acessada!')
})

server.listen(PORT, () => {
    console.log('Server is running on port '+PORT);
});