function invertirPalabras(texto) {
    return texto
        .split(' ') // Dividimos el texto en palabras
        .map(palabra => palabra.split('').reverse().join('')) // Invertimos cada palabra
        .join(' '); // Unimos las palabras invertidas en una cadena
}

// Ejemplo de uso
let miTexto = "me llamo yurii y me gusta el brawl stars";
console.log(invertirPalabras(miTexto)); 
