// Instrucciones
// Encuenta los múltiplos de un número

// La función getMultiples() recibe como parámetros dos números:

// Tu labor es encontrar todos los múltiplos del primer número (sin incluir este número) recibido siempre y cuando sean menores al segundo número recibido.

// Ejemplo:
// Si la función recibe 20 y 100 deberías retornar un arreglo como el siguiente [40, 60, 80], ya que esos son todos los múltiplos del 20 menores a 100.

// *Recuerda utilizar return para devolver tu solución.
// *Los números que recibe la función podrán ser dos números cualesquiera.


function getMultiples(number, limit) {
  let arrayMultiples = []
  for (let i = number + 1; i < limit; i++) {
      if (i % number === 0) {
          arrayMultiples.push(i)
      }
  }
  return arrayMultiples
}
