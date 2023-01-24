// 1. Usa la sentencia if para ayudar a los clientes de una pizzeria en línea a saber cuanto deben pagar por la pizza que ordenaron.

// las pizzas que tenemos disponibles son:
// 1. Pequeña: $10
// 2. Mediana: $15
// 3. Grande: $20
// 4. Familiar: $25
let pizza = 'Familiar'
let pago

if (pizza === 'Pequeña') {
    pago = 'Ud debe pagar $10'
} else if 
  (pizza === 'Mediana') {
    pago = 'Ud debe pagar $15'
} 
  else if (pizza === 'Grande') {
    pago = 'Ud debe pagar $20'
} 
  else if (pizza === 'Familiar') {
    pago = 'Ud debe pagar $25'
} else {
    pago = 'No esta Disponible'}
  
console.log(pago)

// En caso de que el cliente solicite una pizza que no esté disponible, debe mostrar un mensaje indicando que no está disponible.

// tu código aquí

// 2. Pasa la siguiente condición a una sentencia switch
const diaDeLaSemana = 'martes'
if (diaDeLaSemana === 'lunes') {
  console.log('Es lunes')
} else if (diaDeLaSemana === 'martes') {
  console.log('Es martes')
} else if (diaDeLaSemana === 'miercoles') {
  console.log('Es miercoles')
} else if (diaDeLaSemana === 'jueves') {
  console.log('Es jueves')
} else if (diaDeLaSemana === 'viernes') {
  console.log('Es viernes')
} else if (diaDeLaSemana === 'sabado') {
  console.log('Es sabado')
} else if (diaDeLaSemana === 'domingo') {
  console.log('Es domingo')
} else {
  console.log('No es un día de la semana')
}

const diaDeLaSemanas = 'miercoles'

switch (diaDeLaSemanas) {
  case 'lunes':
    console.log('Es lunes')
    break
  case 'martes':
    console.log('Es martes')
    break
  case 'miercoles':
    console.log('Es miercoles')
    break
  case 'jueves':
    console.log('Es jueves')
    break
  case 'viernes':
    console.log('Es viernes')
    break
  case 'sabado':
    console.log('Es sabado')
    break
  case 'domingo':
    console.log('Es domingo')
    break
  default:
    console.log('No es un día de la semana')
    break
}

// 3. La siguiente función debe recibir como parámetro un string con un nombre del mes y debe retornar un string que indique la estación del año correspondiente. Si el mes no es válido, debe retornar "Mes no válido". Use la sentencia switch.
function estacionMes(mes) {
  // tu código aquí
  switch (mes) {
    case "":
      return "Ingrese el mes del año"
      break;
    case 'Enero':
    case 'Febrero':
    case 'Marzo':
      return 'Inicia el verano en Perú'
      break;
    case 'Abril':
    case 'Mayo':
    case 'Junio':
      return 'Inicia el otoño en Perú'
      break;
    case 'Julio':
    case 'Agosto':
    case 'Septiembre':
      return 'Inicia el invierno en Perú'
      break;
    case 'Septiembre':
    case 'Diciembre':
      return 'Inicia la primavera en Perú'
      break;
    default:
      return 'Mes no válido'
  }
}
console.log(estacionMes('Septiembre'))


// 4. Crea una función que realice la siguiente operación: si recibe un número mayor a 10, retorne ese número, si no, retorne el doble del número recibido.
function num(num1) {
  if (num1 > 10) {
    return num1
  } else {
    return num1 * 2
  }
}

console.log(num(11))
console.log(num(2))
console.log(num(6))
console.log(num(16))

// 5. Crea una función que reciba como parámetro un array de N cantidad de elementos y retorne el elemento que se encuentra en la mitad
//    - En caso de que el número de la mitad sea uno solo el programa debe devolverlo, por ejemplo, del arreglo [1, 3, 4] devolvemos el 3
//    - En caso de que hayan 2 números en medio devolveremos un array de números, por ejemplo, en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]
function halfArray(params) {
  // tu código aquí
  if (parseInt(params.length /2) < (params.length /2)) {
    return params[parseInt(params.length /2)]    
  } else {
    let arr = [params[parseInt(params.length /2)-1], params[parseInt(params.length /2)]]
    return arr    
  }
}

console.log(halfArray([1, 3, 4]))
console.log(halfArray([1, 3, 4, 5, 6, 7]))

// 6. Tenemos un array con varios colores repetidos, pero quisieramos saber cuantos colores diferentes hay en el array y que cantidad de cada color hay. Tu trabajo es crear una función que reciba un array de colores y retorne un objeto con la cantidad de cada color.


// function amountColor(arrayColor) {
//   let contRed = 0
//   let contGreen = 0
//   let contBlue = 0
//   let contYellow = 0
//   let contOrange = 0

//   let objAmountColor = {}
//   for (let i = 0; i < arrayColor.length; i++) {
//     if (arrayColor[i] === 'rojo') {
//       contRed += 1
//     } else if (arrayColor[i] === 'verde') {
//       contGreen += 1
//     } else if (arrayColor[i] === 'azul') {
//       contBlue += 1
//     } else if (arrayColor[i] === 'amarillo') {
//       contYellow += 1
//     } else {
//       contOrange += 1

//     }
//   }
//   return objAmountColor = { rojo: contRed, verde: contGreen, azul: contBlue, amarillo: contYellow, naranja: contOrange }
// }
// console.log(amountColor(colores))

const colores = [
  "rojo",
  "verde",
  "verde",
  "azul",
  "amarillo",
  "naranja",
  "rojo",
  "amarillo",
  "rojo",
  "verde",
  "azul",
  "rojo",
  'violeta'
]

function amountColors(array) {
  let count = {}
  for (let i = 0; i < array.length; i++) {
    if (count[array[i]]) {
      count[array[i]]++
    } else {
      count[array[i]] = 1
    }
  }
  return count
}

console.log(amountColors(colores))