function suma(a, b) {
    console.log(arguments);
    return a + b;
}

let resultado = suma(7623453, 2387547, 1, 3, 6);
console.log(resultado);
console.log(typeof suma);