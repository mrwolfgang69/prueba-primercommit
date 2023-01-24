// Instrucciones
// Encontrando un usario por su nombre

// La función findUser() recibe como parámetros 1 arreglo y un string:
// El arreglo es una lista de usuarios con una estructura como la siguiente


// const users = [
//     {
//         name: 'Erik',
//         gender: 'male',
//         age: 22,
//     },
//     {
//         name: 'Daniela',
//         gender: 'female',
//         age: 22,
//     },
//     {
//         name: 'Gustavo',
//         gender: 'male',
//         age: 49,
//     },
//     {
//         name: 'María',
//         gender: 'female',
//         age: 35,
//     },
// ];
// El string es el nombre de uno de los usuarios que se encuentra en el arreglo, por ejemplo: 'Gustavo'

// Tu labor es encontrar y devolver al usuario con el nombre recibido. Ejemplo:
// En el caso de haber recibido el arreglo mencionado anteriormento y el nombre 'Gustavo' deberías retornar:

// {
//   name: 'Gustavo',
//   gender: 'male',
//   age: 49,
// }

function findUser(users, name) {
    for(let i=0;i<users.length;i++)
        {
           if(users[i].name===name)
           {
           
            return users[i];
           
           }
        }
    }
    
    