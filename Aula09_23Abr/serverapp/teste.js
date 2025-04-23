import db from "./clapback.js"

await db.init("banco.json")

//db.set("/verduras/alface", {
//    id: "alface",
//    nome: "Alface",
//    cor: "Verde"
//})

let dados = db.get("/frutas")

console.log("Dados contém: ",dados)