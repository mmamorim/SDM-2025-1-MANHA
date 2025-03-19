import { encrypt } from "./criptografia.js";
import readlineSync from "readline-sync"
import chalk from 'chalk';

let ret = encrypt("oi gente tudo bem?")

console.log("saida: ",ret);

let nome = readlineSync.question('Digite seu nome:');
console.log('Oi ' + nome + '! Tudo bem com vc?');

console.log(chalk.red('Hello world!'));