import nomes from "./names.js"
import sobrenomes from "./sobrenomes.js"

//console.log("Nomes contém: ",nomes);

function fakeName() {
    let pos = parseInt(Math.random()*nomes.length)
    return nomes[pos]
}

function fakeSobrenome() {
    let pos = parseInt(Math.random()*sobrenomes.length)
    return sobrenomes[pos]
}

export function createFakeUser() {
    let nome = fakeName()
    let sobrenome = fakeSobrenome() 
    let username = nome.charAt(0)+sobrenome
    username = username.toLowerCase()
    let user = {
        name: nome,
        lastname: sobrenome,
        login: username,
        idade: 0,
        rg: 0,
        email: ""        
    }
    return user
}