
console.log("Vamos jogar palitinhos?")

let nomeJog = prompt("Qual seu nome?")
let qtdePalitosJog = 3
let qtdeEscolhaJog = 0
let qtdeChuteJog = 0

let nomeComp = "Computador"
let qtdePalitosComp = 3
let qtdeEscolhaComp = 0
let qtdeChuteComp = 0

while(qtdePalitosJog > 0 && qtdePalitosComp > 0) {

    qtdeEscolhaJog = prompt("Quantos palitos vc quer separar?")
    qtdeEscolhaJog = parseInt(qtdeEscolhaJog)

    qtdeEscolhaComp = (parseInt(Math.random()*10) % qtdePalitosComp)+1
 
    console.log("qtdeEscolhaJog",qtdeEscolhaJog);
    console.log("qtdeEscolhaComp",qtdeEscolhaComp);
    break

}