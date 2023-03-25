/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  var arreglo = [];

  for (prop in objeto) {
    arreglo.push([prop, objeto[prop]]);
  }

  return arreglo;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var letras = {};

  string
    .split("")
    .sort()
    .forEach((letra) => {
      if (letras.hasOwnProperty(letra)) letras[letra] += 1;
      else letras[letra] = 1;
    });

  return letras;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  var mayus = "";
  var minus = "";

  string.split("").forEach((l) => {
    if (l === l.toUpperCase()) mayus += l;
    else minus += l;
  });

  return mayus + minus;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var espero = [];

  frase.split(" ").forEach((p) => {
    var palabra = "";
    for (var i = p.length - 1; i > -1; i--) palabra += p[i];
    espero.push(palabra);
  });

  return espero.join(" ");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var bandera = true;
  numero += "";
  for (var i = 0; i < numero.length / 2; i++) {
    if (numero[i] !== numero[numero.length - 1 - i]) {
      bandera = false;
      break;
    }
  }

  return bandera ? "Es capicua" : "No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var nuevaCadena = "";
  string.split("").forEach((letra) => {
    if (letra !== "a" && letra !== "b" && letra !== "c") nuevaCadena += letra;
  });
  return nuevaCadena;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  for (var i = 0; i < arrayOfStrings.length; i++) {
    for (var j = arrayOfStrings.length - 1; j > i; j--) {
      if (arrayOfStrings[i].length > arrayOfStrings[j].length) {
        var aux = arrayOfStrings[i];
        arrayOfStrings[i] = arrayOfStrings[j];
        arrayOfStrings[j] = aux;
      }
    }
  }
  return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var arreglo = [];

  for(var i = 0; i < array1.length; i++){
   for( var j = 0; j < array2.length; j++){
      if(array1[i] === array2[j]) arreglo.push(array1[i]);
   }
  }

  return arreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
