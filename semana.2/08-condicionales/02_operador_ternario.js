/******************************************/
/* CONDICIONALES ==> OPERADOR TERNARIO ? */
/*****************************************/
// A veces necesitamos asignar valor a una variable dependiendo de alguna condición.

// La sintaxis es la siguiente:
// condición ? valor si es true : valor si es false

// Ejemplo
const edad = 17 

const permiso = (edad >= 18) ? 'Puedes conducir' : 'No tienes edad para conducir'
console.log(permiso)

const nombreDeUsuario = 'Abigail'
const saludo = nombreDeUsuario ? `Bienvenid@ ${nombreDeUsuario}` : 'No se ha iniciado sesión'
console.log(saludo) 

// Ejemplo con múltiples condiciones
const num = 5
const num1 = 10

const resultado = (num < num1) ? 'El número es menor' :
                  (num > num1) ? 'El número es mayor' :
                  'Los números son iguales'
console.log(resultado)

// No se recomienda el uso del operador ternario de esta forma.