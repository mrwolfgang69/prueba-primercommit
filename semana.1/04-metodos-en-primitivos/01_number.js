/**********************/
/* MÉTODOS ==> NUMBER */
/**********************/

// ==> Funciones globales
/*parseInt()*/
// Para convertir una cadena a un número entero se utiliza la función parseInt()
console.log(parseInt('95.345 mxn'))
// Para convertir un número flotante a un número entero también se utiliza
console.log(parseInt(95.345))

/*parseFloat()*/
// Para convertir una cadena a un número flotante se utiliza la función parseFloat()
console.log(parseFloat('95.345 mxn'))

// ==> Métodos de Number
// toFixed() Redondea un Número a una cantidad de decimales especificada.
console.log(95.1234434535345.toFixed())
console.log(95.1234434535345.toFixed(2))
console.log(95.1234434535345.toFixed(3))

// Number.isNaN()
console.log(Number.isNaN('abc' * 5))
console.log(Number.isNaN('abc' + 5))

// Number.isFinite() 
console.log(Number.isFinite(1 / 0))
console.log(Number.isFinite(12))

// ==> El objeto Math: tiene propiedades y métodos para constantes y funciones matemáticas.
Math

// Propiedad PI
console.log(Math.PI)

// Math.round() Redondea hacia el entero más cercano
console.log(Math.round(3.6))
console.log(Math.round(3.5)) // A partir de .5 redondea hacia arriba
console.log(Math.round(3.4))

// Math.ceil() Redondea hacia el entero más alto
console.log(Math.ceil(3.6))
console.log(Math.ceil(3.4))
console.log(Math.ceil(3.2))

// Math.floor() Redondea hacia el entero más abajo
console.log(Math.floor(3.6))
console.log(Math.floor(3.4))
console.log(Math.floor(3.2))

// Math.max() Devuelve el valor más alto de una lista de números
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9))

// Math.min() Devuelve el valor más bajo de una lista de números
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9))

// Math.random() Devuelve un número aleatorio ENTRE 0 y 1
console.log(Math.random())
console.log(Math.floor(Math.random() * 60) + 1)
console.log(Math.floor(Math.random() * 2) + 1)
                       
// Math.trunc() Remueve los decimales de un número
// ** Es como el parceInt pero sale NaN cuando el número incluye letras
console.log(Math.trunc('95.345 mxn'))
console.log(Math.trunc('95.34'))
console.log(Math.trunc(95.345))