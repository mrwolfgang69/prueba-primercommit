/********************************/
/* OPERADORES ==> COMPARACIÓN */
/******************************/

/* En JavaScript se escriben así:
  //Operadores relacionales
  - mayor que >
  - menor que <
  - mayor o igual que >=
  - menor o igual que <=
  // Operadores de igualdad
  - igual a == (compara valores)
  - igualdad estricta === (compara valores y tipo de dato)
  - diferente de != (compara valores)
  - diferente estricto !== (compara valores y tipo de dato)
*/

// Los operadores de comparacion retornan un valor booleano.
console.log(5 > 2) // true
console.log(5 < 2) // false
console.log(5 <= 2) // false
console.log(5 >= 2) // true
console.log(5 === 2) // false
console.log(5 !== 2) // true

const resultado = 5 * 2 >= 10
console.log(resultado) // true

// comparando cadenas
console.log('a' < 'z') // true 
console.log('a' > 'z') // false 
console.log('Z' > 'a') // false 
console.log('z' > 'A') // true 
console.log('Z' > 'A') // true

const cadena1 = 'tierra'
const cadena2 = 'tierna'
console.log(cadena1 < cadena2) // false
console.log('r' < 'n') // false

console.log(cadena1[0], cadena1[0] <= cadena2[0], cadena2[0])
console.log(cadena1[1], cadena1[1] <= cadena2[1], cadena2[1])
console.log(cadena1[2], cadena1[2] <= cadena2[2], cadena2[2])
console.log(cadena1[3], cadena1[3] <= cadena2[3], cadena2[3])
console.log(cadena1[4], cadena1[4] <= cadena2[4], cadena2[4])
console.log(cadena1[5], cadena1[5] <= cadena2[5], cadena2[5])

// comparacion de diferentes tipos
console.log(5 == '5') // true
console.log(5 < '60') // true
console.log('5' > '10000') // true  
console.log('aaaaaaaaaa' < 'z') // true
console.log('b' < 'ab') // false

// Comparación con valores true y false
// true = 1, false = 0
console.log(true == 1)
console.log(false == 0)
console.log(true/false)

// Comparación de null y undefined ==> Existe una regla especial, son iguales entre sí, pero no a ningún otro valor.

// Iguales entre sí
console.log(undefined == null)
console.log(null == null)
console.log(undefined == undefined)

// Pero no a ningún otro valor.
console.log(null == 0)
console.log(null == '')
console.log(null == NaN)
console.log(null == false)
console.log(undefined == 0)
console.log(undefined == '')
console.log(undefined == NaN)
console.log(undefined == false)

// Para otras comparaciones < > <= >= = null/undefined
// Resultado extraño:
// se convierten en números: null se convierte en 0,
// mientras que undefined se convierte en NaN.

console.log(null < 1)
console.log(null >= 0)

console.log(undefined < 1)
console.log(undefined >= 0)

// Igualdad estricta
console.log(5 == '5')
console.log(true == 1)
console.log(false == 0)
console.log(undefined == null)

console.log(5 === '5')
console.log(true === 1)
console.log(false === 0)
console.log(undefined === null)

// Diferente estricto
console.log(3 != '3')
console.log(1 != true)

console.log(3 !== '3')
console.log(1 !== true)