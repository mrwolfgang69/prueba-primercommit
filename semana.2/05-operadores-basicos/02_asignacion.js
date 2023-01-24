/******************************/
/* OPERADORES ==> ASIGNACIÓN */
/*****************************/

// Una asignación = también es un operador.
// Su precedencia es la más baja
const resultado = 2 * 2 + 1 // 5 => primero se ejecuta el operador * y luego el operador + y por último se asigna el resultado a la variable resultado.

// Una expresión más compleja
let a = 1
const b = 2
const c = 10 - (a = b + 1)

console.log(a) // 3
console.log(b) // 2
console.log(c) // 7

// encadenar asignaciones
let x, y, z
x = y = z = 5 * 2

console.log(x)
console.log(y)
console.log(z)

// acortadores “modifica y asigna”
let numero = 10
numero = numero + 5 // 15
numero = numero * 2 // 30

let num = 10
num += 5 // 15
num *= 2 // 30

// aplica para todos los operadores aritméticos.

// Aumentar o disminuir un número en uno es una de las operaciones numéricas más comunes.
let increase = 0
console.log(increase++)
console.log(increase++)
console.log(increase++)
console.log(increase++)
console.log(increase)
console.log(++increase)
console.log(++increase)
console.log(++increase)

let decrement = 6
console.log(decrement--)
console.log(decrement--)
console.log(decrement--)

console.log(--decrement)
console.log(--decrement)
console.log(--decrement)

// Prefijo y Sufijo

// Optener el valor actual como prefijo
let prefijo = 1
//Incremente el valor en ese momento
console.log(++prefijo)

// Optener el valor actual como sufijo
let sufijo = 1
//Nos regresa el valor que tiene en ese momento la variable y después hace el incremento
console.log(sufijo++)

// los dos operadores realizan el incremento.
console.log(prefijo)
console.log(sufijo)


