// 1. Crea un arreglo con los números del 1 al 400
let arr = []
for (let i = 1; i <= 400; i++) {
  arr[i - 1] = i
}
console.log(arr)
// 2. Crea una función que reciba como parámetros 2 números, y retorne un arreglo con todos los valores en el rango de esos 2 números (incluyéndolos), por ejemplo, si recibe 1 y 4 la función debe de retornar el arreglo [1, 2, 3, 4], asumiremos que el segundo parámetro recibido es mayor al primero.

function twoNum(num1, num2){
  let number = []
  for (let i = num1; i <= num2; i++) {
    number.push(i)
  }
  return number
}
console.log(twoNum(1, 4));
// 3. Crea una función que lea un array de N cantidad de números y retorne la suma de todos esos números.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sum (arr) {
  let result = 0
  for (let i = 0; i < arr.length; i++ ) {
    result += arr[i]
  }
  return result
}

console.log(sum(numeros))

// 4. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con los correos de los usuarios.
const usuarios = [
  {
    nombre: 'Erik',
    edad: 29,
    correo: 'erik@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/erik' },
      { nombre: 'twitter', url: 'twitter/erik' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Georg',
    edad: 33,
    correo: 'georg@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/georg' },
      { nombre: 'twitter', url: 'twitter/georg' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Andrea',
    edad: 42,
    correo: 'andrea@hotmail.com',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Mujer'
  },
  {
    nombre: 'Oscar',
    edad: 31,
    correo: 'oscar@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/oscar' },
      { nombre: 'twitter', url: 'twiter/oscar' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Daniela',
    edad: 22,
    correo: 'andrea@uaq.mx',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Mujer'
  }
]


function getEmailUsers(array){
  let emails = []
  for(let i =0; i < array.length; ++i ){
    emails[i] = array[i].correo
  }
  return emails
}

console.log(getEmailUsers(usuarios)) //listo

// 5. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todas las urls de las cuentas de facebook.
function urlUsers(array) {
  let url = []
  for (let i = 0; i < array.length; i++){
    url.push(array[i].social[0].url)
  }
  return url
}

console.log(urlUsers(usuarios))
// 6. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todos los nombres de los usuarios que sean mujeres.
function genero (arr) {
  let womenUsers = []
  for (let i = 0; i< arr.length; i++){
    if (arr[i].genero.includes('Mujer')) {
      womenUsers.push(arr[i].nombre)
    }
  }
  return womenUsers
}
console.log(genero(usuarios))
// 7. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todos los usuarios que esten dentro del rango de edad de 20 a 30 años.
// function getYoungAdults(users){
//   let youngAdults=[]
//   users.forEach(user => {
//     if(20 <= user.edad && user.edad <=30){
//       youngAdults.push(user)
//     }
//   })
//   return youngAdults
// }
// console.log(getYoungAdults(usuarios))

function rango_edad(user) {
  let edades=[];
  for(let i=0;i<user.length;i++){
    if(user[i].edad >=20 && user[i].edad <= 30){
      edades.push(user);
    }
  }
  return edades;
}
console.log(rango_edad(usuarios))
// 8. Crea una función que reciba como parámetro un array de N cantidad de elementos y retorne el elemento que se encuentra en la mitad
//    - En caso de que el número de la mitad sea uno solo el programa debe devolverlo, por ejemplo, del arreglo [1, 3, 4] devolvemos el 3
//    - En caso de que hayan 2 números en medio devolveremos un array de números, por ejemplo, en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]
function getMiddle(numbers){
  const middle = []
  const middleIndex = Math.floor(numbers.length / 2)
  if(numbers.length % 2 === 0){
    middle.push(numbers[middleIndex - 1])
    middle.push(numbers[middleIndex])
  } else {
    middle.push(numbers[middleIndex])
  }
  return middle
}

console.log(getMiddle([1, 3, 4, 5, 5, 3]));

// 9. El reto Fizz Buzz: Tenemos un array de números del 1-100, todos los que son múltiplos de 3 deben devolver Fizz, todos los que son múltiplos de 5 deben devolver Buzz y los que son múltiplos de ambos, es decir, 3 y 5, deben devolver Fizz Buzz.
let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];

function multiploFizzBuzz(array){
  let nums = []
  for(let i = 0; i < array.length; i++){
    if(array[i] % 15 === 0){
      nums.push(`${i + 1} Fizz Buzz`)
    } else if(array[i] % 5 === 0) {
      nums.push(`${i + 1} Buzz`)
    } else if(array[i] % 3 === 0){
      nums.push(`${i + 1} Fizz`)
    }
  }
  return nums
}
console.log(multiploFizzBuzz(num))



