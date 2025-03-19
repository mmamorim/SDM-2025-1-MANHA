
export function encrypt(texto) {
    let saida = ""
    for(let i=0; i<texto.length; i++) {
        if(i%3 == 0) {
            saida = saida + "X"
        } else {
            saida = saida + texto.charAt(i)
        }
    }
    return saida
}