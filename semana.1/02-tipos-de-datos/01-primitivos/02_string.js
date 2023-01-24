/*** TIPOS DE DATOS ==> Cadenas de Texto ***/
//==> Un string en JavaScript es una cadena de caracteres y debe colocarse entre comillas.
// En JavaScript, hay 3 tipos de comillas.
// 1. Comillas dobles: "Hola".
// 2. Comillas simples: 'Hola'.
// 3. Backticks (comillas invertidas): `Hola`.

let str1 = "Cadena con comillas dobles"
let str2 = 'Cadena con comillas simples'
let str3 = `Cadena con comillas invertidas`

//==> Uso de comillas dentro de comillas
// let srt4 = 'I'm in love with JS'
let str4 = "I'm in love with JS"
let str5 = 'Mi libro favorito es "El principito"'

//==> Caracter de escape
let str6 = "Mi libro favorito es \"El principito\""

//==> Salto de línea
console.log('Lista de compras: \n -Manzana \n -Pera \-Sandia')

//==> Múltiples líneas con backticks
console.log(`Lista de compras: 
-Manzana 
-Pera 
-Sandia`)

//==> Concatenación de cadenas 
// Existen dos formas:
// Con el operador + 
let str8 = 'Juanito'
let str9 = 'Luis'

console.log(str8 + ' ' + str9) // Juan Luis

// Con Backticks o template strings o template literals (Interpolación)
// Te permite concatenar de manera dinámica, haciendo uso de marcadores
console.log(`${str8} ${str9}`)

//==> Iteración de cadenas de texto
// Las cadenas de texto son iterables, contienen índices y pueden ser recorridas
let cadenaDeTexto = 'Hola cómo están'

// H  o  l  a     c  ó  m  o      e   s   t   á   n
// 0  1  2  3  4  5  6  7  8  9  10  11  12  13  14
// Todos los caracteres tienen un índice y se empiezan a contar desde 0

// Cómo acceder a los valores
console.log(`índice 0 = ${cadenaDeTexto[0]}`)
console.log(`índice 1 = ${cadenaDeTexto[1]}`)
console.log(`índice 2 = ${cadenaDeTexto[2]}`)
console.log(`índice 3 = ${cadenaDeTexto[3]}`)
console.log(`índice 4 = ${cadenaDeTexto[4]}`)
console.log(`índice 5 = ${cadenaDeTexto[5]}`)
console.log(`índice 6 = ${cadenaDeTexto[6]}`)
console.log(`índice 7 = ${cadenaDeTexto[7]}`)
console.log(`índice 8 = ${cadenaDeTexto[8]}`)
console.log(`índice 9 = ${cadenaDeTexto[9]}`)
console.log(`índice 10 = ${cadenaDeTexto[10]}`)
console.log(`índice 11 = ${cadenaDeTexto[11]}`)
console.log(`índice 12 = ${cadenaDeTexto[12]}`)
console.log(`índice 13 = ${cadenaDeTexto[13]}`)
console.log(`índice 14 = ${cadenaDeTexto[14]}`)

// Cómo saber el total de caracteres que tiene una cadena de texto
//==> Propiedad length
// La propiedad length nos devuelve el número de caracteres que tiene la cadena de texto, empezando a contar desde el 1, no desde el 0
console.log(cadenaDeTexto.length)

console.log(cadenaDeTexto[15]) // ya que saldrá undefined, porque es un valor que no está definido, que no existe

// Los strings son inmutables, no se pueden modificar
let cadena = 'Hola me llamo cadena'

cadena[0] = 'A'

console.log(cadena)

// ejemplo arreglo
let arreglo = ['Hola', 'cómo', 'están']
arreglo[0] = 'Adios'

console.log(arreglo)
