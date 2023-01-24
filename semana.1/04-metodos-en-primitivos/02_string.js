/*******************************************/
/* MÉTODOS ==> CADENAS DE TEXTO (STRINGS) */
/******************************************/

// Los métodos de strings son métodos que se pueden usar con cadenas de texto

const cadenaDeTexto = 'Hola soy una cadena de texto'

console.log(cadenaDeTexto.length) 
console.log(cadenaDeTexto[cadenaDeTexto.length - 1])

console.log(cadenaDeTexto[0])

// charAt(índice) Devuelve el caráctr en la pisición especificada, si no existe devuelve una cadena vacia.
console.log(cadenaDeTexto.charAt()) // si no se le asigna valor, lo toma como 0 = H
console.log(cadenaDeTexto.charAt(1))
console.log(cadenaDeTexto.charAt(28)) // '' No da undefined, da un string vacio
console.log(cadenaDeTexto.charAt(-1)) // '' No da undefined, da un string vacio
console.log(cadenaDeTexto.charAt(4)) // ''
console.log(cadenaDeTexto.charAt(8)) // ''

// at(indíce) - Devuelve el carácter en la posición especificada, si no existe devuelve undefined. Este método permite enteros positivos y negativos. Los enteros negativos cuentan de nuevo desde el último carácter de cadena.
console.log(cadenaDeTexto.at()) // H si no se le asigna valor, lo toma como 0
console.log(cadenaDeTexto.at(-1)) // o 
console.log(cadenaDeTexto.at(-2)) // t   la ventaja es que sí podemos utilizar negativos
console.log(cadenaDeTexto.at(28)) // undefined Desventaja, cuando un índice no existe, también regresa undefined

// indexOf(valor, indíce) - Devuelve la posición del primer carácter de la cadena especificada, si no existe devuelve -1.
console.log(cadenaDeTexto.indexOf()) // Si no le paso valor, devuelve -1
console.log(cadenaDeTexto.indexOf('c'))
console.log(cadenaDeTexto.indexOf('d'))
console.log(cadenaDeTexto.indexOf('d', 16))
console.log(cadenaDeTexto.indexOf('d', cadenaDeTexto.indexOf('d') + 1)) // Esto podríamos hacer si no sabemos cuál es el índice de d
console.log(cadenaDeTexto.indexOf(' '))
console.log(cadenaDeTexto.indexOf('z')) // Si no existe arroja -1

// lastIndexOf(valor, indíce) - Devuelve la posición del último carácter de la cadena especificada, si no existe devuelve -1.
//Si se coloca sólo el valor te va a atraer la primer coincidencia iterando de derecha a izquierda
//Si se coloca valor e índice, te traerá la primer coincidencia a partir del índice que le indiques
console.log(cadenaDeTexto.lastIndexOf())
console.log(cadenaDeTexto.lastIndexOf('d'))
console.log(cadenaDeTexto.lastIndexOf('d', 19))
console.log(cadenaDeTexto.lastIndexOf(' '))
console.log(cadenaDeTexto.lastIndexOf('z'))

// includes(valor, indíce) - Devuelve true si la cadena especificada está contenida en la cadena, o false si no está. Es para comprobar.
//Si se coloca sólo el valor te va a atraer la primer coincidencia de izquierda a derecha
//Si se coloca valor e índice, te traerá la primer coincidencia a partir del índice que le indiques
console.log(cadenaDeTexto.includes()) // Si no le paso valor, devuelve false
console.log(cadenaDeTexto.includes('Hola')) 
console.log(cadenaDeTexto.includes('d', 20)) 
console.log(cadenaDeTexto.includes('d', 22)) 
console.log(cadenaDeTexto.includes('hola')) 

// startsWith(valor, indíce) - Devuelve true si la cadena especificada está al inicio de la cadena, o false si no está.
//Si se coloca sólo el valor te va a atraer la primer coincidencia de izquierda a derecha
//Si se coloca valor e índice, te traerá la primer coincidencia a partir del índice que le indiques
console.log(cadenaDeTexto.startsWith('Hola'))
console.log(cadenaDeTexto.startsWith('hola')) // El valor lo busca exacto, es decir, la coincidencia debe ser exacta
console.log(cadenaDeTexto.startsWith('soy'))
console.log(cadenaDeTexto.startsWith('soy', 5))

// endsWith(valor, indíce) - Devuelve true si la cadena especificada está al final de la cadena, o false si no está.
//Si se coloca sólo el valor te va a atraer la primer coincidencia de derecha a izquierda
//Si se coloca valor e índice, te traerá la primer coincidencia a partir del índice que le indiques
console.log(cadenaDeTexto.endsWith('texto'))
console.log(cadenaDeTexto.endsWith('de'))
console.log(cadenaDeTexto.endsWith('de', 22))

/* Mayúsculas y minúsculas */
// toUpperCase() - Devuelve la cadena en mayúsculas.
console.log(cadenaDeTexto.toUpperCase())

// toLowerCase() - Devuelve la cadena en minúsculas.
console.log(cadenaDeTexto.toLowerCase())

/* Extraer un trozo de una cadena */

// substring(indíceInicial, indíceFinal) - Devuelve una subcadena de la cadena.
console.log(cadenaDeTexto.substring())
console.log(cadenaDeTexto.substring(0, 4))
console.log(cadenaDeTexto.substring(4, 0))
console.log(cadenaDeTexto.substring(-4))
console.log(cadenaDeTexto.substring(28)) // ''