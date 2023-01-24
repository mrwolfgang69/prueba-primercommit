/*** TIPOS DE DATOS ==> Object ***/
// => Los objetos son usados para almacenar colecciones de varios datos y entidades más conplejas asociados con un nombre clave y un valor.

let persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 96,
  'es estudiante': false,
  saludar: function (nombre) {
    return `Hola ${nombre}`
  }
}

// => Acceder a una propiedad con notación de punto
console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.edad)

// => Acceder a propiedades con notación de corchetes
// Esta forma nos permite acceder a las propiedades con dos palabras, pero también a las de una palabra, de esta forma
console.log(persona['es estudiante'])
console.log(persona['nombre'])

// Es muy útil utilizar corchetes, porque es como las backticks, hace dinámico el dato
let key = 'es estudiante'

function foo(key) {
  return persona[key]
}

console.log(foo(key))

// => Acceder al método
console.log(persona.saludar('Andres'))

// => Agregar propiedades a un objeto
persona.correo = 'alejandra@correo.com'

console.log(persona)
console.log(persona.correo)

// => Agregar métodos
persona.mostrarEdad = function () {
  return this.edad
}

console.log(persona.mostrarEdad())

// => Remover propiedades de un objeto 
delete persona.apellido
console.log(persona)

delete persona['es estudiante']
console.log(persona)

// => Comprobar si una propiedad existe dentro de un objeto se hace con el operador in

console.log(persona.direccion)

console.log('nombre' in persona)
console.log('direccion' in persona)

// Los objetos son únicos, no se pueden repetir
let obj = {
  a: 1
}

let newObj = {
  a: 1
} 

console.log(obj === newObj)

let obj2 = obj
console.log(obj === obj2)