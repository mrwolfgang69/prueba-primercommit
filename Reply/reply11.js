// Instrucciones
// Encuentra la edad que más se repite

// La función findMostCommonAge() recibe como parámetro un arreglo de estudiantes

// El arreglo es una lista de estudiantes con una estructura como la siguiente


// [
//   { name: 'Daniela', age: 25 },
//   { name: 'Andrea', age: 23 },
//   { name: 'José', age: 27 },
//   { name: 'Georg', age: 23 },
// ];
// Tu labor es encontrar y retornar la edad que se repite más veces.

// En el ejemplo anterior retornaríamos 23, ya que 23 es la edad que se repite más veces.


let estudiantes = [
    { name: 'Daniela', age: 24 },
    { name: 'Andrea', age: 27 },
    { name: 'José', age: 28 },
    { name: 'Georg', age: 27 },
    { name: 'Georg', age: 27 },
    { name: 'Georg', age: 25 },
    { name: 'Georg', age: 24 },
    { name: 'Georg', age: 27 }

  ];

let obj = {name: "Luis", age: 23}
console.log(obj.name)
console.log(obj["name"])


  function findMostCommonAge(students) {
    const count = {}
    let age 
      for (let i = 0; i< students.length; i++){
        if (count[students[i].age] == null){
          count[students[i].age] = 1 
        } else {
          count[students[i].age] ++
        }
      }

      console.log(count)
      /*Propiedades: Key  y Values  key: "Value" */
      /*Obtienes el valor de cada propiedad del objeto count */
      age = Object.values(count)
      /* Como se creo un arreglo se puede usar el metodo sort para acamodar de mayor a menor Recordando que sort  a- b menor a mayor 
      y b - a es igual a Mayor a menor*/
      age.sort((a, b) => b - a)
      console.log(age)
      //el maximo
      //return age[0]
      for (let i = 0; i < students.length; i++) {
        /*          1 === 4  */
        /*          4 === 4  */
        if (count[students[i].age] === age[0]){ //comparo la value con el arreglo age que contiene las veces que se repiten las edades
            return students[i].age //Si se cumple el If se devuelve el valor en el indice donde se cumplio 
        }       
      }
    }


    console.log(findMostCommonAge(estudiantes))
