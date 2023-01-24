/**********************************/
/* MÉTODOS ==> OBJETOS (OBJECTS) */
/*********************************/

const persona = {
    nombre: 'Juan',
    apellido: 'Sanchez',
    edad: 25
}

// .entries() Devuelve un array que contiene todos los pares [key, value] de las propiedades enumerables en formato cadena de texto que le pertenece a un objeto dado.
console.log(Object.entries(persona))

// .keys() Devuelve un array que contiene todas las claves de las propiedades enumerables de un objeto dado.
console.log(Object.keys(persona))


// .values() Devuelve un array que contiene todos los valores de las propiedads enumerables de un objeto dado.
console.log(Object.values(persona))


// .fromntries() Devuelve un objeto que contiene todos los pares [key, value] de las propiedades enumerables en formato cadena de texto que le pertenece a un array dado.
const info = [['nombre', 'Aljeandra'], ['apellido', 'Olazagasti'], ['edad', 17]]
console.log(Object.fromEntries(info))

// .assign() Asigna una o más propiedades de un objeto a un objeto destino.
const obj = {}
console.log(Object.assign(obj, persona))
console.log(obj)
const newObj = {}
console.log(Object.assign(newObj, obj, {nombre: 'Laura'}))

// .freeze() Congela un objeto. Otro código no puede borrar ni cambiar sus propiedades.
Object.freeze(obj)
obj.nombre = 'Manuel'
console.log(obj)

// .isFrozen() Devuelve un booleano que indica si un objeto está congelado.
console.log(Object.isFrozen(obj))
console.log(Object.isFrozen(newObj))

// .seal() Te permite modificar los valores de las propiedades existentes, pero no agregar ni eliminar
console.log(Object.seal(newObj))
newObj.direccion = 'Ciudad de México'
console.log(newObj)
delete newObj.nombre
console.log(newObj)

// .isSealed() Te permite validar si el objeto tiene el método seal
console.log(Object.isSealed(newObj))