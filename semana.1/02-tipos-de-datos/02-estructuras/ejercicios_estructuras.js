/**********************************/
/* TIPOS DE DATOS ==> Ejercicios */
/*********************************/
// 1. ¿Cuál es el resultado de la siguiente expresión?
// [1, 2, 3][0] = 1

// 2. ¿Cuál es el resultado de la siguiente expresión?
// var array = [1, 2, 3]
// array[0] = 1

// 3. ¿Cuál es el resultado de la siguiente expresión?
// var array = [1, 2, 3]
// array[2] = 4
// array = [1, 2, 4]

// 4. ¿Cuál es el resultado de la siguiente expresión?
// var array = [1, 2, 3]
// array.length = 3

// 5. ¿Cuál es el resultado de la siguiente expresión?
// var array = [1, 2, 3]
// array[array.length - 1] = 3

// 6. ¿Cuál es el resultado de la siguiente expresión?
// var index = 2
// var array = [1, 2, 3]
// array[index] = 3

// 7. Define un objeto con 3 propiedades: nombre, apellido y edad y muestra el nombre y la edad.
let persona = {
  nombre: 'Alejandra',
  apellido: 'Olazagasti',
  edad: 17
}

console.log(`Hola soy ${persona.nombre} y tengo ${persona.edad} años`)
// 8. Agrega una nueva propiedad al objeto anterior llamada correo y muestra el valor de la propiedad.
persona.correo = 'ale@correo.com'
console.log(persona)
// 9. Agrega un nuevo método al objeto anterior llamado nombreCompleto que retorne el nombre y el apellido y muestra el valor de la propiedad. Puedes usar las backticks para concatenar las cadenas.
persona.nombreCompleto = function() {
  return `${'nombre:'} ${this.name} ${'Apellido:'} ${this.lasName}`
}

console.log(persona.nombreCompleto()) 

// 10. Accede a las propiedades primer elemento y segundo elemento del siguiente objeto:
var obj = {
  "primer elemento": 1,
  "segundo elemento": 2,
  prop: true,
};

console.log(obj['primer elemento'])
console.log(obj['segundo elemento'])

// 11. Comprueba si el objeto anterior tiene la propiedad prop.
console.log('prop' in obj) 

// 12. ¿Cuál es el resultado de la siguiente expresión?
// var obj = {}
// var obj2 = obj

// obj == obj2
// Resultado: true
