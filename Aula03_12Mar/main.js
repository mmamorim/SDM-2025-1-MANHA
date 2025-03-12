import { PI, calculaAreaCirculo, calculaCompCirculo } from "./circulos.js"
import { newUser } from "./users.js"

console.log("Alo mundo!")

console.log("O valor do PI é: "+PI)
let area = calculaAreaCirculo(5)
console.log("A área é: "+area)
let comp = calculaCompCirculo(5)
console.log("O comprimento é: "+comp)

let user = newUser("Ana","Alface")
let user2 = newUser("Bia","Beterraba")

console.log("a variável user contém: ",user);
console.log("a variável user2 contém: ",user2);
