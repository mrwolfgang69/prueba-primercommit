/*****************************************/
/* BUCLES ==> DO WHILE (HACER MIENTRAS) */
/****************************************/

/*
Sintaxis:
let i = 0 <= Inicializador
do {
  // cuerpo del bucle
} while (condición)
*/

// A diferencia de while primero ejecuta el cuerpo y luego comprueba la condición, mientras esta se cumpla, el cuerpo se ejecuta una y otra vez.

let num3 = 1

do {
  console.log(num3)
  num3++
} while (num3 <= 10)

// Ejemplo do while con decremento

let num4 = 10

do {
  console.log(num4)
  num4--
} while (num4)

// Diferencias entre while y do while
// El bucle “while” se ejecuta mientras la condición sea verdadera.
// El bucle “do…while” se ejecuta al menos una vez, y luego comprueba la condición.

let bucleWhile = 1
let bucleDoWhile = 1

while (false) {
  console.log(bucleWhile)
  bucleWhile++
}

do {
  console.log(bucleDoWhile)
  bucleDoWhile++
} while (0)