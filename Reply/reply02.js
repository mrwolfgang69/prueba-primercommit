// Instrucciones
// ** Encuentra la última palabra de un string **

// La función findLastWord() recibe como parámetro un string cualquiera, tu labor es tomar ese string y obtener la última palabra y retornarlo usando return

// Ejemplo: Si el string que recibe es "Hola, me llamo Erik", con deberás retornar la palabra Erik


function findLastWord(text) {
   
    return text.slice(text.lastIndexOf(" ")+1, text.length);
}