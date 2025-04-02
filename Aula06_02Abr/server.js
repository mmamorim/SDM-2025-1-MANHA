import express from 'express';
const server = express();


server.get('/',(req, res) => {
    res.send('Oi Gente');
});

server.get('/user',(req, res) => {
    res.send('Recebi uma requisição na rota /user ...');
});

server.get('/produto/cor',(req, res) => {
    res.send('Recebi uma requisição na rota /produto/cor ...');
});

server.listen(3000, () => {
    console.log('Server escutando na porta 3000');
});