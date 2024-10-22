function contarPalabras(texto) {
    // Usamos split para dividir el texto en palabras, separando por espacios
    // Luego usamos filter para eliminar los elementos vacíos que puedan generarse por múltiples espacios
    let palabras = texto.trim().split(/\s+/).filter(palabra => palabra.length > 0);
    return palabras.length;
}

// Ejemplo de uso
let miTexto = "Mi nombre es Yurii";
console.log(contarPalabras(miTexto));  // Resultado: 6
