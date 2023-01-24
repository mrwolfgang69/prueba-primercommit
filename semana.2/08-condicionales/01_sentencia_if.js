/***********************************/
/* CONDICIONALES */
/**********************************/
// Algunas veces, necesitamos ejecutar diferentes acciones(sentencias) basadas en diferentes condiciones.

/******************/
/* SENTENCIA IF */
/******************/

// Evalua la condición en los paréntesis y si el resultado es true ejecuta un bloque de código.
if (true) { // Convierte el resultado en booleano.
  console.log('Mostrar mensaje si la condición es true')
}

// Podemos pasar una expresión entre los paréntesis
if (10 > 5) {
  console.log('Sí, 10 es mayor a 5')
}

// O podemos almacenar la operación en una variable y pasarla como condición
let operacion = 10 > 5

if (operacion) {
  console.log('Sí, es mayor a 5')
}

// Si la condición es false, no se ejecuta el bloque de código
if (false) { // Convierte el resultado en booleano.
  console.log('Mostrar mensaje si la condición es true')
}

// Podemos usar todos los if que necesitemos
const numeroUno = 10
const numeroDos = 5

if (numeroUno < numeroDos) {
  console.log(`${numeroUno} es menor que ${numeroDos}`)
}
if (numeroUno > numeroDos) {
  console.log(`${numeroUno} es mayor que ${numeroDos}`)
}
if (numeroUno === numeroDos) {
  console.log(`${numeroUno} es igual que ${numeroDos}`)
}

/*********/
/* else */
/********/
// La cláusula else es un bloque opcional y este se ejecutará cuando la condición sea falsa.
if (numeroUno < numeroDos) {
  console.log(`${numeroUno} es menor que ${numeroDos}`)
} else {
  console.log(`${numeroUno} es mayor que ${numeroDos}`)
}

// Ejemplo práctico
const edad = 17
let permiso

if (edad >= 18) {
  permiso = 'Puede conducir'
} else {
  permiso = 'No puedo conducir'
}

console.log(permiso)

/************/
/* else if */
/***********/
// La cláusula else if nos proporciona bloques opcionales para probar todas nuestras variantes.
if (numeroUno < numeroDos) {
  console.log(`${numeroUno} es menor que ${numeroDos}`)
}else if (numeroUno > numeroDos) {
  console.log(`${numeroUno} es mayor que ${numeroDos}`)
} else {
  console.log(`${numeroUno} es igual que ${numeroDos}`)
}

// Podemos usar todas las cláusulas else if que necesitemos. El bloque else es opcional.
const diaDeLaSemana = 'verano'

if (diaDeLaSemana === 'lunes') {
  console.log('Es lunes')
} else if (diaDeLaSemana === 'martes') {
  console.log('Es martes')
} else if (diaDeLaSemana === 'miercoles') {
  console.log('Es miercoles')
} else if (diaDeLaSemana === 'jueves') {
  console.log('Es jueves')
} else if (diaDeLaSemana === 'viernes') {
  console.log('Es viernes')
} else if (diaDeLaSemana === 'sabado') {
  console.log('Es sabado')
} else if (diaDeLaSemana === 'domingo') {
  console.log('Es domingo')
} else {
  console.log('No es un día de la semana')
}

// El órden es importante porque si la primer condición se cumple se detiene la estructura de control y arroja el primer valor

//Ejemplo
const puntaje = 350

if (puntaje > 400) {
  console.log('Excelente')
} else if (puntaje > 300) {
  console.log('Buen trabajo')
} else {
  console.log('sigue intentando')
}

//CONDICIONES ANIDADAS
// un if dentro de otro if

const nombres = ['Juan', 'Pedro', 'Maria', 'Jose', 'Jesus', 'Luis', 'Julian', 'Julio']

function newArrayNames(arr) {
  let nombresFiltrados = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('J')) {
      console.log(arr[i])
      if (arr[i].length <= 4) {
        console.log(arr[i])
        nombresFiltrados.push(arr[i])
      }
    }
  }
  return nombresFiltrados
}

console.log(newArrayNames(nombres))