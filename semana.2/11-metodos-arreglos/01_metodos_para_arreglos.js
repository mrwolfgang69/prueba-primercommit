/**********************************/
/* MÉTODOS ==> ARREGLOS (ARRAYS) */
/*********************************/

const frutas = ['Manzana', 'Pera', 'Naranja', 'Sandia', 'Melón', 'Pera']

// Los métodos .indexOf, .lastIndexOf e .includes tienen la misma sintaxis y hacen básicamente lo mismo que sus contrapartes de strings, pero operan sobre elementos en lugar de caracteres:

// .indexOf(searchElement, index) – busca el elemento comenzando desde el index, y devuelve el index donde fue encontrado, de otro modo devuelve -1.
console.log(frutas.indexOf('Melón')) // 4
console.log(frutas.indexOf('Pera')) // 1
console.log(frutas.indexOf('Pera', 2)) // 5
console.log(frutas.indexOf('Mango')) // -1

// .lastIndexOf(item, from) – igual que el anterior, pero busca de derecha a izquierda.
console.log(frutas.lastIndexOf('Pera'))  // 5
console.log(frutas.lastIndexOf('Pera', 4))  // 1
console.log(frutas.lastIndexOf('Banana'))  // -1

// .includes(searchElement, index) – busca comenzando desde el índice, devuelve true en caso de ser encontrado.
console.log(frutas.includes('Pera')) // true
console.log(frutas.includes('Manzana', 1)) // false

// Una pequeña diferencia de includes es que puede maneja correctamente NaN a diferencia de indexOf y lastIndexOf
const arreglo = [NaN]

console.log(arreglo.indexOf(NaN)) // -1
console.log(arreglo.lastIndexOf(NaN)) // -1
console.log(arreglo.includes(NaN)) // true

// .toString() - convierte un arreglo en una cadena de texto string (separado por comas).
console.log(frutas.toString()) 
// No se recomienda usar para arreglos, ya que no te permite separar el texto por el valor que tú le indiques, para ello mejor usar join

// .join(glue) - se comporta igual que toString, pero además puede especificar el separador
console.log(frutas.join(' '))
console.log(frutas.join(', '))

// Ejemplo práctico - Invierte una cadena de texto
const str = 'Hola soy Alessandra y me gusta programar'
console.log(str.split(' ').reverse().join(' '))

// .pop() - Extrae el último elemento del array y lo devuelve:
const ultimoElemento = frutas.pop()
console.log(ultimoElemento)
console.log(frutas)

// .push() - Agrega el elemento al final del array:
frutas.push('Uva', 'Banana')
console.log(frutas)

// con corchetes
frutas[frutas.length] = 'Mango'
console.log(frutas)

// .shift() - Extrae el primer elemento del array y lo devuelve:
const primerElemento = frutas.shift()
console.log(primerElemento)
console.log(frutas)

// .unshift() - Agrega el elemento al principio del array:
frutas.unshift('Manzana')
console.log(frutas)

// .concat(...elementos) - devuelve un nuevo arreglo con todos los elementos actuales y agrega otros arreglos 
const arr1 = ['Luis', 'Maria', 'Jose']
const arr2 = ['Alejandra', 'Pilar']
const arr3 = ['Antony', 'victor', 'Omar']
const nuevoGrupo = arr1.concat(arr2, 'Reinaldo', arr3)
console.log(nuevoGrupo)

// .slice(inidiceInicial - indiceFinal) - crea un nuevo array y copia elementos desde la posición desde / hasta en el nuevo array, no incluye el final.
const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo']

const copiaColores = colores.slice(1, 3)
console.log(copiaColores)
console.log(colores)

console.log(colores.slice(1))
console.log(colores.slice(0))
console.log(colores.slice())
console.log(colores.slice(-1))
console.log(colores.slice(-2))
console.log(colores.slice(-2, -1))

// .splice(desde, cuantos, insertar) - corta el array desde la posición desde / cuantos / y los que desees insertar en el nuevo array.
// El primer parámetro define la posición desde donde se borrarán los elementos.
// El segundo parámetro define cuántos elementos deben eliminarse.
// El tercer parámetro define cuántos elementos deben agregarse.

const estudiantes = ['Luis', 'Pedro', 'Juan', 'Maria', 'Ana', 'Mariana', 'Jorge']

console.log(estudiantes.splice(2, 2))
console.log(estudiantes)
console.log(estudiantes.splice(2, 0, 'Juan', 'Maria', 'Fernando'))
console.log(estudiantes)
console.log(estudiantes.splice(-1, 0, 'Paco'))
console.log(estudiantes)

console.log(estudiantes.splice(1, 1).concat(estudiantes.splice(-3, 1)))

// .reverse() - ordena el array de forma inversa y lo devuelve.
const numeros = [1, 2, 3, 4, 5]
console.log(numeros.reverse())
console.log(numeros)

// .sort() - ordena el array y lo devuelve
const elementos = ['fuego', 'tierra', 'agua', 'aire']
console.log(elementos.sort())
console.log(elementos)

const desordenados = [34, 12, 24, 9, 5]
console.log(desordenados.sort())
console.log(desordenados.sort((a, b) => a - b))
console.log(desordenados.sort((a, b) => b - a))

const string = ['50', '21', '3', '12', '4']
console.log(string.sort((a, b) => a - b))