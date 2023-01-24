/*** TIPOS DE DATOS ==> ARRAY ***/
//==> Los arreglos son usados para almacenar colecciones de datos ordenadas, donde cada elemento tiene un índice númerico.

let array = []
console.log(array)

let frutas = ['manzana', 'pera', 'mango']
//                0         1      2     ==> Los índices en los arreglos, a diferencia de los strings, no van por caracter, van por elemento

// => Acceder a un elemento del arreglo
console.log(frutas[0]) // manzana
console.log(frutas[1]) // pera
console.log(frutas[2]) // mango
console.log(frutas[3]) // undefined

// => Los índices comienzan de 0 hasta length -1
console.log(frutas[frutas.length - 1])

// => Reemplazar un elemento de un arreglo
frutas[0] = 'fresa'
console.log(frutas)

// => Agregar un nuevo elemento
frutas[3] = 'uva'
console.log(frutas)

// => Truncar el arreglo
frutas.length = 2
console.log(frutas)
console.log(frutas[2]) // Modifica el arreglo original, por ejemplo, si trato de acceder al índice [2] ya no existe

// => La forma más fácil de limpiar el arreglo
frutas.length = 0
console.log(frutas)

frutas.length = ""
console.log(frutas)

// => Podemos almacenar cualquier tipo de dato en un arreglo
let vector = [
  { a: 1},
  'hola',
  true,
  39,
  function name (params) {
    return 'hola'
  }
]

console.log(vector[0])
console.log(vector[1])
console.log(vector[2])
console.log(vector[3])
console.log(vector[4]) // function
console.log(vector[4]()) // hola

// => Arreglo multidimensional ==> Arrlegos que continen otros arreglos
// matriz = [[1,2,3],[4,5,6],[7,8,9]]
// Nivel 1      0       1       2
// Nivel 2    0,1,2   0,1,2   0,1,2

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(matriz[0][0])
console.log(matriz[1][1])
console.log(matriz[2][2])

// Cómo saber que es un arreglo
console.log(typeof matriz) // En estructuras el typeof siempre nos dirá que es un objeto
console.log(Array.isArray(matriz))