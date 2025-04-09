# Aula 07 (09/04) 

# Antes de começar...Como acessar atributos de Objetos em Javascript?

Suponha o objeto Javascript armazenado na variável ```obj```

~~~js
let obj = {
  id: "user125",
  nome: "Ana Alface",
  email: "ana@ana.com",
  endereco: {
    rua: "Av. das Alfaces",
    numero: 123
  }
}

obj.nome // "Ana Alface"
obj.endereco.rua // "Av. das Alfaces"
obj["nome"] // "Ana Alface"
obj["endereco"]["rua"] // "Av. das Alfaces"
~~~


# Criar o projeto Node com Express e dependências

1. Criar uma pasta vazia
2. Abrir pasta no VSCode
3. abrir terminal
4. Criar package.json com o comando ```npm init``` ou ```npm init -y```
5. Incluir linha para usar importação ESM no arquivo ```package.json``` 
~~~js
"type": "module",
~~~
6. Instalar dependências
   1. Express ```npm install express```
   2. body-parser ```npm install body-parser```
   3. lowdb ```npm install lowdb```
7. Criar o arquivo do servidor ```server.js``` com o código inicial abaixo

~~~js
import express from 'express';
import bodyParser from 'body-parser'

const server = express();
server.use( bodyParser.json() );       // suporte para JSON-encoded bodies
server.use(bodyParser.urlencoded({     // suporte para URL-encoded bodies
  extended: true
}));

server.get('/', (req, res) => {
 res.send('🙋‍♂️ Oi gente');
});

server.listen(3001, () => {
 console.log('Server escutando na porta 3001');
});
~~~

8. Executar o arquivo ```server.js``` 
~~~bash
node server.js
~~~

9. Adicionar o arquivo ```sgdb.js``` a sua pasta de projeto.

10. Importar o nosso banco de dados JSON simples e iniciá-lo

~~~js
import sgdb from './sgdb.js'

await sgdb.init()
~~~

# Teste da API

Para testar a API podemos usar a extensão EchoAPI.

1. Procurar e Instalar a extensão no VSCode chamada **EchoAPI**