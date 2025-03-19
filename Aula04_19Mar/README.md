# Aula 04 (19/03) 

<img align="right" src="https://cdn.worldvectorlogo.com/logos/nodejs.svg" width="140px;"/>

## NodeJS

**Node.js** é uma ambiente de execução de JavaScript disponível para várias plataformas, de código aberto e gratuita, que permite os programadores criar servidores, aplicações da Web, ferramentas de linha de comando e programas de automação de tarefas.

([download/instalação](https://nodejs.org/pt))


<img align="right" src="https://e7.pngegg.com/pngimages/828/432/png-clipart-npm-node-js-computer-icons-computer-software-installation-others-text-rectangle.png" width="70px;"/>


## npm

O **NPM** é um gerenciador de pacotes utilizado para administrar as bibliotecas e frameworks utilizados em uma aplicação NodeJS. 

([link p/ npm](https://www.npmjs.com/))

## Package.json

Geralmente um projeto NodeJS contém um arquivo ```package.json``` localizado no diretório raiz. Ele descreve os metadados de projetos ou pacotes npm, como versões de pacotes e colaboradores.

O arquivo ```package.json``` simplifica a identificação, gerenciamento e instalação de um pacote. 

Um exemplo do que um arquivo ```package.json```

~~~json
{
  "name": "app01",
  "version": "1.0.0",
  "description": "um app",
  "main": "main.js",
  "scripts": {
    "server": "node ./server.js",
    "test": "node ./teste.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/alguem/app01.git"
  },
  "keywords": [
    "npm",
    "example",
    "basic"
  ],
  "author": "Alguém da Silva",
  "license": "MIT",
}
~~~

<img align="right" src="https://www.pngfind.com/pngs/m/236-2367416_free-download-at-icons8-json-transparent-background-logo.png" width="50px;"/>

## O que é um arquivo JSON?

Um arquivo **JSON** é um arquivo de texto que armazena dados estruturados em pares de chave e valor e é um formato aberto que é usado para trocar dados entre sistemas. **JSON** é a sigla para **JavaScript Object Notation**. 

#### Sintaxe JSON

Além da terminação ```.json``` em todos os arquivos que utilizam esse formato, os dados armazenados devem seguir uma notação específica, ou seja, precisam ser organizados com os seguintes elementos básicos:

* **chaves** ```{ }``` para delimitar os objetos e obrigatórias para iniciar e encerrar o conteúdo;
* **colchetes** ```[ ]``` para indicar um array;
* **dois pontos** ```:``` para separar a chave e seu valor correspondente;
* **vírgula** ```,``` para indicar a separação entre os elementos.

## Modularização (import/export)

Existem duas formas: 
* CJS (Common JavaScript) ou
* ESM (EcmaScript Modules)

Para esta aula vamos apenas mostrar o uso do **ESM (EcmaScript Modules)**

[referência Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules) 

## IMPORTANTE

Para utilizar a forma **ESM (EcmaScript Modules)** precisamos adicionar no nosso arquivo ```package.json``` a seguinte linha

~~~js
"type": "module",
~~~

### Exportando recursos do módulo

Isso é feito usando a declaração ```export```

A maneira mais fácil de usá-lo é colocá-lo na frente de qualquer item que você queira exportar para fora do módulo, por exemplo:

~~~js
export const name = "john";

export function draw() {
    ...
}
~~~

Uma maneira mais conveniente de exportar todos os itens que você deseja exportar é usar uma única instrução de exportação no final do arquivo do módulo, seguida por uma lista separada por vírgula dos recursos que você deseja exportar envoltos em chaves. Por exemplo:

~~~js
export { name, draw }
~~~

### Importando recursos para o seu script

Depois de exportar alguns recursos do seu módulo, é necessário importá-los para o script para poder usá-los. A maneira mais simples de fazer isso é a seguinte:

~~~js
import { name, draw } from "./arquivo.js";
~~~

## Nosso primeiro módulo

Vamos criar um arquivo javascript chamado ```circulo.js``` que será um módulo

~~~js
const PI = 3.1416

function areaCirculo(raio) {
  return PI * raio * raio;
}
~~~

### Vamos testar a instalação de alguns módulos emocionantes....

[readline-sync](https://www.npmjs.com/package/readline-sync)

[chalk](https://github.com/chalk/chalk)


# Funções anônimas

Funções também podem ser criadas por uma expressão de função sem indicar um identificador. Essa função é conhecida como uma **'função anônima'**. Neste caso, a função pode ser armazenada em uma variável ou ser passada como parâmetro para outra função.

~~~js
let raizQuadrada = function (numero) {
  return numero * numero;
};
let x = raizQuadrada(4); //x recebe o valor 16
~~~

Passando a função para outra função

~~~js
function raizCubica(f, numero) {
  return f(numero) * numero;
};
let x = raizCubica(raizQuadrada, 3); //x recebe o valor 27
~~~

# Arrow functions 

As **arrow functions** foram introduzidas no ES6 como uma maneira mais curta e simples de escrever funções. Elas eliminam a necessidade da palavra-chave ```function``` e têm uma sintaxe mais enxuta:

~~~js
const raizQuadrada = (numero) => numero * numero;
~~~

ou

~~~js
const fatorial = (num) => {
  let fat = 1
  for(let i=1; i<=num; i++) {
    fat = fat * i
  }
  return fat
}
~~~

# Funções Callback

As funções de **callback** em JavaScript são funções passadas como argumentos para outras funções. Elas são executadas após a conclusão de uma operação, permitindo um fluxo de trabalho assíncrono. Isso é crucial em operações que dependem de tempo, como solicitações de rede ou eventos de usuário.

## Fetch

https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

> https://geek-jokes.sameerkumar.website/api?format=json

## SetInterval e SetTimeout

* SetInterval: chama uma função a cada período de tempo https://www.w3schools.com/jsref/met_win_setinterval.asp
* SetTimeout: chama uma função uma vez após um período de tempo https://www.w3schools.com/jsref/met_win_settimeout.asp

