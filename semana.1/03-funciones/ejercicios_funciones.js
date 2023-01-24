/******************************/
/* Ejercicios con funciones: */
/*****************************/
// Declara una función que reciba como parámetro nombre y edad y que imprima en consola: "Hola, mi nombre es [nombre] y tengo [edad] años".
function usuario(name, age) {
  console.log(`Hola, mi nombre es ${name} y tengo ${age} años`)
}
usuario('Victor', 37)

/*
  1 - Declara una variable global llamada saludo y colócale como valor "Hola los saludo desde:"
  2 - Declara una función sin parámetros, dentro crea una variable local llamada pais y colócala como valor el país de donde vienes.
  3 - Tu función debe mostrar por consola: "Hola los saludo desde [pais]".
*/
let saludo = 'Hola los saludo desde:'

function saludoDesde(){
  let pais = 'Colombia'
  return `${saludo} ${pais}`
}

console.log(saludoDesde())

// Declara una función que reciba como parámetro numero y numero2 y que retorne el resultado de la suma de ambos.
function suma( num1, num2 ) {
  return num1 + num2
}

console.log(suma(8, 6)) 
// Con el valor retornado de la función anterior realiza una función que reciba como parámetro ese resultado y que retorne el doble del resultado.

let resultado = suma(8, 6)

function doblar(resultado){
  return resultado * 2
}

doblar(resultado)


// Crea una función que retorne un mensaje de bienvenida, recibiendo como parámetro el nombre de la persona, pero si no se recibe ningún parámetro debe retornar "Bienvenido Anónimo".
function welcome(name = 'Anónimo') {
  return `Bienvenido ${name}`
}

console.log(welcome('Luis'))
console.log(welcome())
// Completa la función para que agregue más elementos al final del array
const array = ["a", "b", "c"];

function add(arr, item) {
  return arr[arr.length] = item
}

add(array, 1)
console.log(array)
add(array, 'e')
console.log(array)
add(array, 'f')
console.log(array)

// Define una función que compruebe si existe una propiedad en un objeto, si es así, debe retornar true y si no, false
const obj = {
  name: 'Aless',
  age: 17,
  country: 'México'
}

function hasProperty(obj, property) {
  return property in obj
}

console.log(hasProperty(obj, 'country'))
console.log(hasProperty(obj, 'address'))
// Define una función que reciba como parámetro un objeto con las propiedades nombre, edad y país y un string con el nombre de la propiedad país. La función deberá retornar el valor de la propiedad país.
function getCountry(obj, str) {
  return obj[str]
}

console.log(getCountry(obj, 'country'))
console.log(getCountry({ nombre: "Erika", edad: 33, pais: "Colombia" }, "pais"))
// Define una función que reciba como parámetro un arreglo de 3 números, deberás retornar la suma de todos los númros
const arrays = [1, 2, 3]

function sumArr(arr) {
  return arr[0] + arr[1] + arr[2]
}

console.log(sumArr(arrays))
// Resuelve el siguiente problema utilizando funciones:
//Tenemos un arreglo de usuarios, cada usuario tiene varios atributos; nombre, dad, país, etc. Queremos obtener un arreglo con los nombres de todos los usuarios.
const usuarios = [
  {
    nombre: "Erik",
    edad: 29,
    correo: "erik@academlo.com",
    social: [
      { nombre: "facebook", url: "facebook/erik" },
      { nombre: "twitter", url: "twitter/erik" },
    ],
    genero: "Hombre",
  },
  {
    nombre: "Georg",
    edad: 33,
    correo: "georg@academlo.com",
    social: [
      { nombre: "facebook", url: "facebook/georg" },
      { nombre: "twitter", url: "twitter/georg" },
    ],
    genero: "Hombre",
  },
  {
    nombre: "Andrea",
    edad: 42,
    correo: "andrea@hotmail.com",
    social: [
      { nombre: "facebook", url: "facebook/andrea" },
      { nombre: "twitter", url: "twitter/andrea" },
    ],
    genero: "Mujer",
  },
  {
    nombre: "Oscar",
    edad: 31,
    correo: "oscar@academlo.com",
    social: [
      { nombre: "facebook", url: "facebook/oscar" },
      { nombre: "twitter", url: "twiter/oscar" },
    ],
    genero: "Hombre",
  },
  {
    nombre: "Daniela",
    edad: 22,
    correo: "andrea@uaq.mx",
    social: [
      { nombre: "facebook", url: "facebook/andrea" },
      { nombre: "twitter", url: "twitter/andrea" },
    ],
    genero: "Mujer",
  },
];

function getNames(usuarios) {
  return [
    usuarios[0].nombre,
    usuarios[1].nombre,
    usuarios[2].nombre,
    usuarios[3].nombre,
    usuarios[4].nombre,
  ];
}

console.log(getNames(usuarios))

// Resuelve el siguiente problema utilizando funciones:
//Tenemos un arreglo de usuarios, cada usuario tiene varios atributos; nombre, dad, país, etc. Queremos obtener un arreglo con las url de facebook de todos los usuarios (UTILIZA EL ARREGLO ANTERIOR).
function getUrl(usuarios) {
  console.log(usuarios.length);
  return [
    usuarios[0].social[0].url,
    usuarios[1].social[0].url,
    usuarios[2].social[0].url,
    usuarios[3].social[0].url,
    usuarios[4].social[0].url,
  ]
}

console.log(getUrl(usuarios))