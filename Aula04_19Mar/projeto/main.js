import { encrypt } from "./criptografia.js";
import readlineSync from "readline-sync"
import chalk from 'chalk';

let ret = encrypt("oi gente tudo bem?")
console.log("saida: ",ret);

let contagem = 0
let x = 

let algo = function(nome) {
    console.log('Oi ' + chalk.red(nome) + '! Tudo bem com vc?');
}

setInterval(function() {
    contagem++
    console.log(contagem);
},1000)

//let nome = readlineSync.question('Digite seu nome:');
//bomdia(nome)