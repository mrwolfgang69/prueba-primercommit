/***********************/
/* COERCIÓN DE TIPOS */
/*********************/

// En JavaScript, la coerción es una característica que fuerza a una variable de cierto tipo a tener el comportamiento de una diferente.
//Existe dos tipos:
// Coerción implícita: Ocurre de manera automática de un valor de un tipo de dato a otro
// Coerción explícita: Ocurre cuando forzamos a un valor de un tipo de dato a comportarse como otro

/************************************/
/* COERCIÓN DE TIPOS ==> Implícita */
/***********************************/

// Operador de adición con números y strings
console.log('1' + 1) // 11
console.log(1 + '1') // 11
console.log(3 + 1 + '1' + 3 + 4) // 4134
console.log('Hola ' + 'mundo') // Hola mundo
console.log(false + '2') // 'false2'

// Operadores que no son de adición con números y strings
console.log('24' / 2) // 12
console.log('12' - 5) // 7
console.log('2' * '5') // 10
console.log('abc' * '5') // NaN
console.log('j' / 2) // NaN

// Coerción implícita con null y undefined
// null = 0
console.log(null + 2) //2
console.log(1 / null) // Infinity
console.log(2 * null) // 0
console.log(10 - null) // 10
console.log(null - 10) // -10

// undefined = NaN
console.log(undefined + 2)
console.log(undefined + true)
console.log(undefined * null)
console.log(undefined + undefined)
// Mientras en una operación aritmética exista undefined, siempre me dará NaN

// Coerción implícita con booleanos
// true = 1 y false = 0
console.log(true + 2) // 3
console.log(true * 5) // 5
console.log(true * '5') // 5
console.log(true / false) // Infinity
console.log(true + true + 'false') // '2false'
console.log(true + true + '5') // 25
console.log(true + true * '5') // 6 

/************************************/
/* COERCIÓN DE TIPOS ==> Explícita */
/***********************************/

console.log(typeof Number())
console.log(typeof String())
console.log(typeof Boolean())

// Coerción explícita con objeto constructor String
console.log(String(1) + String(2)) // '12'
console.log(String(null) + String(true)) // 'nulltrue'
console.log(String(undefined) + String(false)) // 'undefinedfalse'

// Coerción explícita con objeto constructor Number
console.log(Number('24') + Number('2')) // 26
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(undefined)) // NaN
console.log(Number('true')) // NaN
console.log(Number('false')) // NaN
console.log(Number('undefined')) // NaN
console.log(Number('null')) // NaN
console.log(Number({})) // NaN
console.log(Number([])) // 0
console.log(Number('a')) // NaN
console.log(Number(NaN)) // NaN

// Coerción explícita con operador de adición
console.log(+'24' + +'2') // 26
console.log(+true) // 1
console.log(+false) // 0
console.log(+null) // 0
console.log(+undefined) // NaN
console.log(+'null') // NaN
console.log(+'false') // NaN
console.log(+'undefined') // NaN
console.log(+[]) // 0
console.log(+{}) // NaN
console.log(+NaN) // NaN

// Coerción explícita con booleanos
// valores truthy
console.log(Boolean(true)) // true
console.log(Boolean(1)) // true
console.log(Boolean(-1)) // true
console.log(Boolean('Hola')) // true
console.log(Boolean(Infinity)) // true
console.log(Boolean(-Infinity)) // true
console.log(Boolean([])) // true
console.log(Boolean({})) // true

// valores falsy
console.log(Boolean('')) // false
console.log(Boolean(0)) // false
console.log(Boolean(false)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false

// Coerción explícita usando funciones globales
console.log(+'15 px') // NaN
console.log(Number('15 px')) // NaN
console.log(parseInt('15 px')) // 15
console.log(parseFloat('15.5 px')) // 15.5 
