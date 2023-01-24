/******************************************/
/* FUNCIONES ==> DECLARACIÓN DE FUNCIÓN */
/****************************************/
// Las funciones son un conjunto de instrucciones que realizan una tarea o calculan un valor y pueden ser reutilizadas.

console.log('Bienvenido a mi página web Laura')
console.log('Bienvenido a mi página web Juan')
console.log('Bienvenido a mi página web Pilar')
console.log('Bienvenido a mi página web Pilar')
console.log('Bienvenido a mi página web Pilar')

function showMessage (name) {
  return `Bienvenido a mi página web ${name}`
}

console.log(showMessage('Juan'))

/*
Sintaxis:

 function nombreDeLaFuncion(parametros,...) {
    instrucciones (código)
    return
 }

  - function: palabra reservada
  - nombreDeLaFuncion: es el nombre de la función
  - parametros: son los parámetros que recibe la función (opcional)
  - {} son los bloques de código que se ejecutarán cuando se llame a la función
*/

// Declaración de la función declarada
function saludar() {
  console.log('Hola')
}

// Llamada a la función, invocar a la función
saludar() // <-- Ejecución de la función, se puede ejecutar cuantas veces sean necesarias
saludar()
saludar()
saludar()

// Las funciones pueden o no retornar algo
// Una función que no devuelve nada siempre retorna undefined. Es decir, toda función en donde no utilizamos un return
console.log(saludar()) // undefined

// Hoisting en declaraciones de funciones
imWorking()

function imWorking () {
  console.log('Estoy funcionando')
}

// Las funciones expresadas no tienen hoisting y se pueden usar con var, let y const
const bar = function () {
  console.log('Soy una función expresada')
}

bar()
/*********************************************************/
/* FUNCIONES ==> ÁMBITO, ALCANCE, SCOPE DE LAS VARIABLES */
/*********************************************************/

// variables locales o de bloque (alcance de la función)
function alcanceLocal () {
  const variableLocal = 'Hola'
  console.log(variableLocal)
}

alcanceLocal()
// console.log(variableLocal) // Da error, la variable no existe

// variables globales (alcance global)
let variableGlobal = 'Hola'

function alcancGlobal() {
  variableGlobal = 'Adios'
}

console.log(variableGlobal) // Hola
alcancGlobal()
console.log(variableGlobal) // Adiós

//Locales vs Globales
let global = 1000

function localVSglobal () {
  // console.log(global)
  let global = 2000
  // Si tengo una variable local declarada con el mismo nombre de la variable global, me toma primero la variable local
  console.log(global)
  
}

console.log(global)
localVSglobal()
console.log(global)

// Por qué sí usar una variable global
// Side effects, es modificar cosas fuera del alcance de esa función dando como resultado efectos secundarios
let counter = 1 // Por fuera va a incrementar al llamarla

function increment () { 
  // let counter = 1 // Por dentro siempre será 1
  return counter++
}

console.log(increment()) // let counter = 1
console.log(increment()) // let counter = 2
console.log(increment()) // let counter = 3
console.log(increment())
console.log(increment())

/*****************************/
/* FUNCIONES ==> PARÁMETROS */
/****************************/

function sumar (a, b) { // => Parámetros
  // <-- Cuando la función se llama, los valores dados se copian y se convierten en variables locales, en el ejemplo serían a y b
  //let a = 1
  //let b = 2
  console.log(a)
  console.log(b)

  return a + b
}

sumar(1, 2) // => Argumentos
console.log(sumar(3, 4))

const result = sumar(5, 6)
console.log(result * 2)

/**************************************/
/* FUNCIONES ==> PARAMETROS IMPLÍCITOS */
/*************************************/
// Las funciones tienen dos parámetros implícitos: arguments y this.
// 1) El objeto arguments => Es un objeto similar o un array que contiene todos los argumentos pasados a la función
function foo() {
  console.log(arguments)
  console.log(arguments[0])
  console.log(arguments[1])
  console.log(arguments[2])
  console.log(arguments.length)

}
 
foo(1 , 'abc', true)

// 2) this => es también conocido como el contexto de la función
function bar1 () {
  console.log(this) // this hace referencia al objeto global cuando la función es llamada como función (objeto windows en el navegador, en este caso NodeJS)
}

bar1()

/******************************************/
/* FUNCIONES ==> VALORES PREDETERMINADOS O POR DEFECTO*/
/*****************************************/
// En una función, si no pasamos un valor a los parámetros , recibe el valor de undefined
// Colocar el = 0 lo hace parámetros por defecto, con la intención d que no tenga undefined si no se asigna algún vaLor al llamar a la función.
function multiplicarSinValorPredeterminado (numero, numero2) {
  console.log(numero * numero2)
}

multiplicarSinValorPredeterminado()

// Usando valores predeterminados
function multiplicarConValorPredeterminado (numero = 3, numero2 = 1) {
  console.log(numero * numero2)
}

multiplicarConValorPredeterminado()
multiplicarConValorPredeterminado(5, 10)

/**************************************/
/* FUNCIONES ==> RETORNANDO UN VALOR, RETURN */
/*************************************/
// Una función puede devolver un valor al código de llamada como resultado. Con la directiva return. Sólo existe un return por función o por bloque, no pueden haber dos
function saludo (nombre) {
  // return
  return `Hola ${nombre}`
}

console.log(saludo('Julio'))

/*FUNCIONES PURAS (inmutabilidad)*/ 

function suma(a, b) {
  return a + b
}
/*=> Para ser pura, una función debe seguir estas reglas:
-Una función para siempre de devolver el mismo valor cuando se le dan las mismas entradas (parámetros).
-Una función pura no debe tener ningún efecto secundario. */
console.log(suma(5, 4))

// Ejemplo para conservar una función pura
const arrayNums = [1, 2, 3]

function pura(arr) {
  return arr[0]
}

console.log(pura(arrayNums))
