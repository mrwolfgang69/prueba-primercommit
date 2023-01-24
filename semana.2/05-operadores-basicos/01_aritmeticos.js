/*******************************/
/* OPERADORES ==> ARITMÉTICOS */
/******************************/
/*
+  Adición(suma)
-  Substracción(resta)
*  Multiplicación
** Exponenciación
/  División
%  Resto
++ Incremento
-- Decremento
*/

// suma o adición +
console.log(2 + 2) // 4

// resta o sustracción -
console.log(4 - 2) // 2

// multiplicación *
console.log(4 * 2) // 8

// división /
console.log(2 / 2) // 1

// módulo o residuo %
const num1 = 13
const num2 = 4

const result = Math.floor(num1 / num2)
console.log(result) // 3
const result2 = result * num2
console.log(result2) // 12
console.log(num1 * result2) // 1

console.log(13 % 4) // 1

// porqué es importante módulo
// saquemos múltiplos
console.log(1 % 2) // 1 Si hay resto, NO es múltiplo
console.log(2 % 2) // 0 Si no hay resto, ES múltiplo
console.log(3 % 2) // 1
console.log(4 % 2) // 0
console.log(5 % 2) // 1

function isEven(n) {
  return n % 2 === 0
}

console.log(isEven(1)) // false
console.log(isEven(2)) // true
console.log(isEven(3)) // false
console.log(isEven(4)) // true

// exponenciación **
console.log(2 * 2) // 4
console.log(2 * 2 * 2) // 8
console.log(2 * 2 * 2 * 2) // 16
console.log(2 * 2 * 2 * 2 * 2) // 32

console.log(2 ** 2) //4 
console.log(2 ** 3) // 8
console.log(2 ** 4) // 16
console.log(2 ** 5) // 32

// Más de un operador en una misma línea
console.log(2 + 2 * 2) // 6
console.log((2 + 2) * 2) // 8

// Si una expresión tiene más de un operador, el orden de ejecución se define por su precedencia o, en otras palabras, el orden de prioridad predeterminado de los operadores.

// Si la precedencia es la misma, el orden de ejecución es de izquierda a derecha.
console.log(2 + 2 - 1) 
console.log(8 / 2 * 1) 

// Precedencia de operadores: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence