/**********************************/
/* VARIABLES ==> VAR, LET, CONST */
/*********************************/
/*
¿Ques es una variable?
Es un espacio en memoria donde se almacena una referencia o un valor.
*/
/* Reglas de nomenclatura de para declarar variables:
- Usar solo let, var o const para declarar variables.
- No puede contener palabras reservadas de JavaScript.
- No puede comenzar con un número.
- No puede contener espacios.
- Solo pueden contener letras, números y guiones bajos y el signo de $.
para el nombre de la variable que contiene varias palabras se suele usar camelCase. Es decir, palabras van una detrás de la otra, con cada palabra iniciando con la primera letra en mayúscula, ejemplo: miPrimeraVariable ... Mejores prácticas en inglés */

/**********************/
/* VARIABLES ==> VAR */
/*********************/

// Declaración de variables
var nombre

// Inicialización de variables
nombre = 'Juan'
console.log(nombre)
// Declarar e inicializar 
var apellido = 'Perez'

// Declaración de múltiples variables
var edad =  23, correo = 'correo@correo.com', direccion 

var edad,
    correo,
    direccion
  
// Declaración de variables por línea
var color = 'rojo'
var pasatiempo = 'programar'

// Reasignación de variables
nombre = 'Marco'
console.log(nombre)

// Re declaración de variables
var nombre = 'Ale'
console.log(nombre)

// Ámbito, alcance, scope de var es global y a nivel de función
//Global
{
  var b = 1 // Dentro de un bloque d código, sigue siendo global
}

console.log(b)

function foo () {

  // var a = 1
  var a = c = 1
  
  console.log('c' in this) // Dice true porque existe en el scope global, this hace referencia al objeto windows cuando es en el navegador, aquí en vsc es NodeJS
  console.log('a' in this) // false

}

foo()
console.log(c) // c sí lo muestra porque se declara como global
// console.log(a)

// Hoisting de var y funciones declaradas
// Es un mecanismo de JavaScript en el que las variables y declaraciones de funciones se mueven a la parte superior de su ámbito antes de la ejecución del código. El contexto tiene 2 fases: creación y ejecución.

console.log(d) // Te permite acceder a la declaración antes de declararla, OJO NO AL VALOR, sólo a la declaración, por eso da undefined
var d = 1

/**********************/
/* VARIABLES ==> LET */
/*********************/
// Let puede modificarse, pero no volver a declararse

// Declaración de variables
let nombre2

// Inicialización de variables
nombre2 = 'Juan'
console.log(nombre2) 
// Re declaración de variable let
// let nombre2 

//Porque let permite declarse sin inicializarse, ejemplo en estructura de control
// if (condition) {
//   nombre2 = 'Laura'
// } else {
//   nombre2 = 'Luis'
// }

// Declaración e inicialización
let apellido2 = 'Garcia'

// Declaración de múltiples variables
// let edad = 20, correo2 = 'correo@correo.com'

let color2 = 'rojo'
let pasatiempo2 = 'programar'

// Reasignación
nombre2 = 'Alan'
console.log(nombre2)

/************************/
/* VARIABLES ==> CONST */
/***********************/
// Const no puede modificarse ni volver a declararse

// Debe inicializarse al ser declarada
const correo3 = 'alan@correo.com'

// No se puede reasignar
// correo3 = 'luis@correo.com'

//No se puede redeclarar
// const correo3 

// Error común
const arr = [1, 2, 3] // El valor de la constante es el array, no los valores dentro del array
console.log(arr)
arr[1] = 4 // Puedes modificar los valores del array, pero no los de la constante
console.log(arr)

// Ámbito, alcance, scope de let y const: global y local o de bloque
{
  let nameUser = 'Ale'
  console.log(nameUser)

  const nombreUsuario = 'Ale'
  console.log(nombreUsuario)
}
// console.log(nombreUsuario)

let email = 'ale@correo.com'
{

  console.log(email)
  
  let nameUser = 'Ale'
  console.log(nameUser)

  const nombreUsuario = 'Ale'
  console.log(nombreUsuario)
  
}

/* Hoisting (zona TDZ Temporal Dead Zone) de let y const:
-Las declaraciones con let se elevan a la parte superior pero no se inicializan
-Las declaraciones con const son elevadas pero const no prmite declarar una variable sin inicializarla */

// console.log(f)
let f 

// Más Info: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Lexical_grammar // palabras reservadas
