/********************************/
/* BUCLES */
/*******************************/
// Los Bucles son una forma de repetir el mismo código varias veces. 
// Existen 3 tipos:
// -while: La condición es comprobada antes de cada iteración
// -dowhile: La condición es comprobada después de cada iteración
// -for: la condición es comprobada antes de cada iteración con ajustes adicionales disponibles

/********************************/
/* BUCLES ==> WHILE (MIENTRAS) */
/*******************************/
// While crea un bucle que ejecuta una instrucción specificada mientras cierta expresión o condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la instrucción.
/*
Sintaxis:
let i = 0 <= Inicializador
while (condicion) {
  // Bloque de código - cuerpo del bucle
  i++ <= Operación
}
*/

let num = 1

while (num <= 10) {
  console.log(num)
  num++
}

let numMinus = 10

while (numMinus) {
  console.log(numMinus)
  numMinus--
}

let numsReverse = -10
while (numsReverse) {
  console.log(numsReverse)
  numsReverse++
}

if (0) {
  console.log('Se va a mostrar el mensaje')
}

// Con arreglos 
const frutas = ['mango', 'piña', 'sandia', 'melon', 'platano', 'naranja']

let frutasInicial = 2

while (frutasInicial < frutas.length) {
  console.log(frutas[frutasInicial])
  frutasInicial++
}

// Con un arreglo de objetos

const users = [{numero: 0}, {numero: 1}, {numero: 2}]

let user = 0

while (user < users.length) {
  console.log(users[user]['numero'])
  user++
}

// Ejemplo práctico con while
const usuarios = [
  {
    nombre: 'Juan',
    edad: 25
  },
  {
    nombre: 'Diego',
    edad: 35
  },
  {
    nombre: 'Luis',
    edad: 45
  }
]

let i = 0
let infoUsers = []

while (i < usuarios.length) {
  infoUsers[i] = `${usuarios[i].nombre} tiene ${usuarios[i].edad} años`
  i++
}

console.log(infoUsers)

