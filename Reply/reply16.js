// Instrucciones
// Cuenta las veces que se repite una letra

// La función countLetter() recibe como parámetros dos strings:

// El primer string es una frase cualquiera.

// El segundo string es una letra cualquiera.

// Tu labor es encontrar cuántas veces se repite la letra en el string.

// Ejemplo:
// Si tu función recibe como( frase "Hola, me llamo Erik" y como letra "a" debes retornar 2, ya que la letra "a" se encuentra 2 veces en la frase.

let phrase = "Hola, me llamo Erik"
let letter = "a"
function countLetter(phrase, letter) {
    let count = []
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === letter) {
            count++
        }
    }
return count
}

console.log(countLetter(letter))