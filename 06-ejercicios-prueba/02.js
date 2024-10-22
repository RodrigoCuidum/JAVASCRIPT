function capitalizarPrimeraLetra(texto) {
    return texto
        .toLowerCase() // Convertimos todo el texto a minúsculas primero para asegurar consistencia
        .split(' ') // Dividimos el texto en palabras usando espacio como delimitador
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)) // Convertimos la primera letra de cada palabra a mayúscula
        .join(' '); // Unimos las palabras de nuevo en una sola cadena
}

// Ejemplo de uso
let miTexto = "el ejemplo del texto es yurii";
console.log(capitalizarPrimeraLetra(miTexto)); 
