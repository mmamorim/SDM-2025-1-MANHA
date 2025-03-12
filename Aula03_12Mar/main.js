import { PI, calculaAreaCirculo, calculaCompCirculo } from "./circulos.js"
import { createFakeUser } from "./fakeUsers.js"
import { newUser } from "./users.js"

console.log("Alo mundo!")

console.log("O valor do PI é: "+PI)
let area = calculaAreaCirculo(5)
console.log("A área é: "+area)
let comp = calculaCompCirculo(5)
console.log("O comprimento é: "+comp)

let user = newUser("Ana","Alface")
let fuser = createFakeUser()

console.log("a variável user contém: ",user);
console.log("a variável fuser contém: ",fuser);
