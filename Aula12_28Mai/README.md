# Aula 12 (28/05) 

# Autorização e Autenticação

## Midlewares

~~~js
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
~~~



