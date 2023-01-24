/**** Guia de estilo de Javascript ****/

/*Convenciones de codificación para Javascript: // Hay varias convenciones, esta es la recomendada por Academlo
Generalmente cubren:
  - Reglas de nomenclatura y declaración para variables y funciones.
  - Reglas para el uso de espacios en blanco, sangría y comentarios.
  - Prácticas y principios de programación.

Beneficios:
  - Mejorar la legibilidad del código.
  - Facilitar el mantenimiento del código.
  - Aumentar la productividad del programador.
  - Aumentar la calidad del código.
*/

/*** Comentarios ***/
// Este es un comentarios de una sola línea
/* Este es un
comentario
de 
varias líneas */

/*** Sentencias ***/
// => Las sentencias son construcciones sintácticas y comandos que realizan acciones.
console.log("Hola mundo")

/*** Expresiones ***/
// => Una expresión es una combinación de valores, variables, operadores o funciones que se evalúa para producir un valor.
console.log(2 + 2)

/*** Espaciado alrededor de los operadores ***/
// Los operadores deben tener espacios alrededor de ellos y después de las comas. Esto mejora la legibilidad del código.
var x = 2 + 3

var values = ["a", "b", "c"]

/*** Indentación ***/
// Hay dos tipos de identación:
//-Horizontal: Se realiza una sangría horizontal utilizando 2 o 4 espacios o el símbolo de tabulación horizontal (key Tabulador)
let i = 1
// -Vertical: líneas vacías para dividir código en bloques lógicos.
while (i < 10) {
  console.log(i)
  // vertical
  i++
}
// vertical
console.log(i)

/*** Tipos de valores ***/
/* La sintaxis de Javascript define dos tipos de valores:
  - Los valores fijos, también llamados literales.
  - Los valores dinámicos, también llamados variables.
*/
1, "Hola", true, null, [1, 2, 3] // literles
var variable = "valer" // dinámicos

/*** Reglas de nomenclatura para variables y funciones***/
// Las variables y funciones deben usar la notación camelCase. Es decir, la primera palabra debe comenzar con minúscula y las siguientes palabras deben comenzar con mayúscula. En inglés
var miPrimerVariable

function miFuncion() {}

/*** Reglas de la declaración ***/
/* Reglas generales para declaraciones simples:
  - Declaraciones simples deben ir en una sola línea.
*/
var numero = 1

var array = [1, 2, 3]

/* Reglas para declaraciones complejas:
  - Coloque la llave de apertura al final de la primera línea.
  - Use un espacio en blanco antes de la llave de apertura.
  - Coloque la llave de cierre en una nueva línea, alineado con la declaración.
  - No use un espacio en blanco antes de la llave de cierre.
*/
// funciones
function nombre(params) {}

nombre();

// bucles
for (let i = 0; i < array.length; i++) {}

// estructuras de control
if (condition) {

} else {

}

/* Reglas generales para las definiciones de objetos:
  - Coloque la llave de apertura en la misma línea que el nombre del objeto.
  - Use dos puntos y un espacio en blanco después de cada propiedad.
  - Coloque la llave de cierre en una nueva línea, sin espacios en blanco.
*/
var objeto = {

  propiedad: "valor"

}

/*** Punto y coma ***/
// => Se puede omitir un punto y coma en la mayoría de los casos cuando existe un salto de línea, JavaScript interpreta el salto de línea como un punto y coma “implícito”.
console.log('Hola')

// => Hay casos en los que sí debemos usarlos, cuando la siguiente sentencia comienza con (, [, /, + o - 
var entero = 5;

[1, 2, 3][0]

/*** Bloques de código ***/
// Los bloques de código son construcciones que contienen sentencias agrupadas. Podemos usar esto para aislar un fragmento de código que realiza su propia tarea.
{
  console.log('Bloque')
}