// Instrucciones
// Ordenando estudiantes por calificación

// La función orderStudentsByScore() recibe como parámetro un arreglo de estudiantes con la siguiente estructura:


// [
//   { name: 'Georg', email: 'georg@academlo.com', score: 100 },
//   { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
//   { name: 'Andrés', email: 'andres@gmail.com', score: 34 }
// ]
// Tu labor es hacer ordenar todos los elementos de menor a mayor utilizando como referencia la propiedad 'score'.

// Ejemplo:
// Si tu función recibe el arreglo mencionado anteriormente deberías retornar el siguiente arreglo, ya que el score más pequeño es 34, le sigue el 70 y el mayor es 100:

  

// [
//     { name: 'Andrés', email: 'andres@gmail.com', score: 34 },
//     { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
//     { name: 'Georg', email: 'georg@academlo.com', score: 100 }





let students = [
    { name: 'Georg', email: 'georg@academlo.com', score: 100 },
    { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
    { name: 'Andrés', email: 'andres@gmail.com', score: 34 }
  ]
console.log(students.sort())

  function orderStudentsByScore(students){
    let X = [];
        X = students.sort((a, b) => a.score - b.score)
        return (X)
  }

  console.log(orderStudentsByScore(students))