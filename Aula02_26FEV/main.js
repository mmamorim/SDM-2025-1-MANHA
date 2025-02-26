
console.log("Vamos jogar palitinhos?")

let nomeJog = "Bia" //prompt("Qual seu nome?")
let qtdePalitosJog = 3
let qtdeEscolhaJog = 0
let qtdeChuteJog = 0

let nomeComp = "Computador"
let qtdePalitosComp = 3
let qtdeEscolhaComp = 0
let qtdeChuteComp = 0

function calculaPalpiteDoComputador() {
    let qtdeSorteada = (parseInt(Math.random()*10) % (qtdePalitosJog+1))
    let palpite = qtdeEscolhaComp + qtdeSorteada
    return palpite
}

let teste = calculaPalpiteDoComputador()
console.log(teste);

while(qtdePalitosJog > 0 && qtdePalitosComp > 0) {

    qtdeEscolhaJog = prompt("Quantos palitos vc quer separar?")
    qtdeEscolhaJog = parseInt(qtdeEscolhaJog)

    qtdeEscolhaComp = (parseInt(Math.random()*10) % qtdePalitosComp)+1
 
    qtdeChuteJog = prompt("Qual seu palpite?")
    qtdeChuteComp = calculaPalpiteDoComputador()

    let soma = qtdeEscolhaJog + qtdeEscolhaComp
    if(qtdeChuteJog == soma) {
        alert("Ganhou o "+nomeJog)
        qtdePalitosJog--
    } else {
        if(qtdeChuteComp == soma) {
            alert("Ganhou o "+nomeComp)
            qtdePalitosComp--    
        } else {
            alert("NINGUÉM Ganhou!!!")
        }
    }

    let texto = nomeJog+" com "+qtdePalitosJog+" palitos\n" 
    texto = texto + nomeComp+" com "+qtdePalitosComp+" palitos\n"
    alert(texto)
}