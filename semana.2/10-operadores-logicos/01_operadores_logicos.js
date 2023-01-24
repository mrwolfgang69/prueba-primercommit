/***************************/
/* OPERADORES ==> LÓGICOS */
/**************************/

// Hay cuatro operadores lógicos en JavaScript, aunque sean llamados lógicos, pueden ser aplicados a valores de cualquier tipo, no solo booleanos. El resultado también puede ser de cualquier tipo.

/*
|| OR => Busca el primer valor verdadero o el último si no lo encuentra, el cero lo toma como falso
&& AND => Busca el primer valor falso o el último si no lo encuentra
! NOT => Convierte el valor a booleano y un segundo NOT invierte el valor de nuevo
?? ES NULO (Nullish)=> busca igual que OR per busca el primer valor definido (que no sea null o undefined), el cero no lo toma como falso, el cero sí cuenta
*/

/******************************/
/* OPERADORES ==> LÓGICOS OR */
/*****************************/
// OR se representa con dos símbolos de línea vertical ||
// Hay 4 combinaciones lógicas posibles:
console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false
// El resultado es siempre true excepto cuando ambos son false

// Regresa el primer valor verdadero
console.log(0 || 1) // 1
console.log(0 || ' ' || '') // ' '
console.log(null || undefined) // undefined  => porque si no hay ningún verdadero regresa el último
console.log(undefined || '' || false || null || NaN || 0) // 0
console.log(1 || 2 || 3 || 4) // 1, porque si hay muchos verdaderos, siempre regresa el primer valor verdadero
console.log(null || 'hola' || 123) // 'hola'
console.log(null || '' || false) // false

// Ejemplo práctico
const nombre = null
const apellido = null
const nombreUsuario = null

console.log('Bienvenido ', nombre || apellido || nombreUsuario || 'Anónimo') // Bienvenido Anónimo

/******************************/
/* OPERADORES ==> LÓGICOS AND */
/*****************************/
// AND es representado con dos ampersands &&
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false
// El resultado es siempre false excepto cuando ambos son true

// Regresa el primer valor falso
console.log(0 && 1) // 0
console.log(null && undefined) // null
console.log(0 && '' && ' ') // 0
console.log(undefined && '' && false && null && NaN && 0) // undefined
console.log(1 && 2 && 3 && 4) // 4
console.log(null && 'hola' && 123) // null 
console.log(1 && 'hola' && 123) // 123

// **Importante** La precedencia del operador AND es mayor que la de OR
console.log(true && false || true) // true
// Por pasos
// 1-
console.log(true && false) // false
// 2- 
console.log(false || true) // true

// Ejemplo práctico
const hora = 7
const minutos = 0
const segundos = 0

console.log(hora === 7 && minutos === 0 && segundos === 0) // true
// Las reglas anteriores son similares a las de OR. La diferencia es que AND retorna el primer valor falso mientras que OR retorna el primer valor verdadero.

// Recuerda:
// - OR retorna el primer valor verdadero o el último valor si ninguno fue encontrado.
// - AND retorna el primer valor falso o el último valor si ninguno fue encontrado.

/*******************************/
/* OPERADORES ==> LÓGICOS NOT */
/******************************/
// NOT es representado con un signo de exclamación !

/*
El operador acepta un solo argumento y realiza lo siguiente:
- Convierte el operando al tipo booleano: true/false.
- Retorna el valor contrario.
*/

console.log(true) // true
console.log(!true) // false
console.log(false) // false
console.log(!false) // true

// NOT con otros tipos de datos
console.log(1) // 1 
console.log(!1) // false
console.log(0) // 0
console.log(!0) // true
console.log('texto') // texto
console.log(!'texto') // false
console.log(null) // null
console.log(!null) // true
console.log(NaN) // NaN
console.log(!NaN) // true
console.log(undefined) // undefined
console.log(!undefined) // true
// El primer NOT convierte el valor a booleano y retorna el inverso, y el segundo NOT lo invierte de nuevo. Tenemos una simple coerción explícita a booleano.

// La precedencia de NOT es la mayor de todos los operadores lógicos, antes de AND y OR.
console.log(true && false || !true) // false

//Ejemplo práctico
const user = '' // faLSE

if (!user) {
  console.log('Tienes que iniciar sesión primero')
} else {
  console.log('Mandamos la información a tu correo')
}

/**********************************************/
/* OPERADORES ==> LÓGICOS ?? NULLISH COALESCING */
/*********************************************/
// NULLISH COALESCING es representado con dos signos de interrogación ??

// Como este trata a null y a undefined de forma similar, usaremos un término especial para fines didácticos. Diremos que una expresión es “definida” cuando no es null ni undefined.

let a  // = 0 // = undefined // = null // = false
const b = 15

// nullish
console.log(a ?? b) // 15 => a no está definida, b es 15
// or
console.log(a || b)

/*
La gran diferencia es que:
  || devuelve el primer valor verdadero.
  ?? devuelve el primer valor "definido".
*/

// Por detrás así se compara el OR vs NULLISH
console.log(0 == false) // OR
console.log(0 === false) // NULISH

// Ejemplo práctico
const height = 0
console.log(height || 'No se conoce la altura')
console.log(height ?? 'No se conoce la altura')
// En la práctica, una altura cero es a menudo un valor válido que no debería ser reemplazado por un valor por defecto. En este caso ?? hace lo correcto. Como en las ingenierias y matematicas, el 0 cuenta

// La precedencia del operador ?? es la misma de ||.
console.log(NaN ?? (null || 'hola')) //