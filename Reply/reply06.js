// Instrucciones
// Obtén los correos de todos los usuarios

// La función getEmails() recibe como parámetro un arreglo de objetos con las propiedades email y name, tu labor es obtener todos los correos y retornarlos en un arreglo utilizando return.

// Ejemplo: Si el arreglo que recibe es


// [
//   { name: "Erik", email: "erik@academlo.com", age: 20 },
//   { name: "Georg", email: "georg@academlo.com", age: 30 },
//   { name: "Daniel", email: "daniel@academlo.com", age: 40 }
// ]
// Deberas retornar el siguiente arreglo:
// ["erik@academlo.com", "georg@academlo.com", "daniel@academlo.com"]

// *Recuerda utilizar return para devolver tu solución.
// *El arreglo que recibe la función puede tener n cantidad de usuarios.

function getEmails (users){
    let emails = []
    for (let i = 0; i < users.length; i++){
    emails.push((users[i].email))
    }
    return emails
    
    }
     