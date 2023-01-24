// Instrucciones
// Cuenta los estudiantes de un país

// La función countStudents() recibe 3 parámetros, los 2 primeros son arreglos y el tercero es un string

// El primer arreglo es una lista de estudiantes con una estructura como la siguiente


// [
//   { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
//   { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
//   { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
//   { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
// ]
// El segundo arreglo es una lista de países con una estructura como la siguiente


// [
//   { id: 1, name: 'Mexico', },
//   { id: 2, name: 'Colombia' }
// ]
// El tercer parámetro es el nombre de un país, por ejemplo: 'Colombia'

// Tu labor es contar y retornar el número total de estudiantes que pertenezcan al país que reciba la función.

// En el ejemplo anterior retornaríamos 3, ya que 3 estudiantes pertenecen al país con el id 2.

function countStudents(students, countries, countryName) {let Myid=0;
    let count=0;
     for(let i=0;i<countries.length;i++)
     {
       if(countries[i].name===countryName)
       {
        Myid=countries[i].id
        break ; 
       }
     }
       for(let j=0;j<students.length;j++)
         {
         if(students[j].country_id===Myid)
         {
           count++;
         }
         }
    return count;
     }                                                      
  