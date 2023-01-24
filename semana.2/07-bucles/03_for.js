/*******************/
/* BUCLES ==> FOR */
/******************/
// El bucle for es más complejo, pero también el más usado.

/*
Sintaxis:
for (inicialización let i = 0; condición i < 10; operación i++) {
  // cuerpo del bucle
}
*/

/*
Vamos a examinar la declaración for parte por parte:
1. (inicialización) se ejecuta una vez al principio del bucle.
2. (condición) se comprueba antes de cada iteración. Si es falsa, el bucle finaliza.
3. (código) se ejecuta una y otra vez mientras la condición sea verdadera.
4. (operación) se ejecuta después del cuerpo al final de cada iteración del bucle.
*/

for (let iniciarEn = 0; iniciarEn <= 10; iniciarEn++) {
  console.log(iniciarEn)
}

// El algoritmo general del bucle funciona de esta forma:
/*
  inicialización
  --> si condición se cumple --> ejecuta el cuerpo del bucle --> ejecuta operación
  --> si condición se cumple --> ejecuta el cuerpo del bucle --> ejecuta operación
  --> si condición se cumple --> ejecuta el cuerpo del bucle --> ejecuta operación
  --> si condición ya no se cumple --> termina el bucle
*/

for (let iniciarEn = 10; iniciarEn; iniciarEn--) {
  console.log(iniciarEn)
}

for (let i = -10; i; i++) {
  console.log(i)
}

// Ejemplo práctico con for
const usuarios = [
  {
    nombre: 'Juan',
    edad: 25
  },
  {
    nombre: 'Diego',
    edad: 35
  },
  {
    nombre: 'Luis',
    edad: 45
  }
]


let infoUsers = []
for (let i = 0; i < usuarios.length; i++) {
  infoUsers[i] = usuarios[i].nombre
}

console.log(infoUsers)

// Rompe el bucle con break
// Cuando la condición se vuelve falsa se sale de un bucle, Pero podemos forzar una salida en cualquier momento usando la directiva especial break.

for (let i = 1; i < 50; i++) {
  console.log(i)
  if (i === 5) {
    break
  }
}

// Continua con la siguiente iteración con continue
// La directiva continue es una “versión más ligera” de break. No detiene el bucle completo. En su lugar, detiene la iteración actual y fuerza al bucle a comenzar una nueva (si la condición lo permite).

//pares
for (let i = 0; i <= 20; i++) {
  if (i % 2) {
    continue
  }
  console.log(i)
}

// impares
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    continue
  }
  console.log(i)
}

console.log(1 % 2)
console.log(2 % 2)
console.log(3 % 2)
console.log(4 % 2)

// for anidados
// un for dentro de otro for
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i: ${i}, j: ${j}`)
  }
}

/*
i:1
  j:1
i:1
  j:2
i:1
  j:3
i:2 
  j:1
i:2
  j:2
i:2
  j:3
i:3
  j:1
i:3
  j:2
i:3
  j:3
*/

// Con un ejemplo práctico
const users = [{id: 1}, {id: 2}]
const assistance = [{user_id: 2, active: true}, {user_id: 1, active: false}]

for (let i = 0; i < users.length; i++) {
  console.log(i)
  for (let j = 0; j < assistance.length; j++) {
    console.log(j)
    if (users[i].id === assistance[j].user_id) {
      users[i].active = assistance[j].active
    }
  }
}
console.log(users)

// Etiqueta, es un identificador con un signo de dos puntos: el nombre puede ser el que queramos.
salteYa: for (let i = 1; i <= 3; i++) {
  console.log(i)
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      break salteYa
    }
    console.log(j)
  }
}