// { id: 1, recuperarClave: function(){} }
function Usuario () {
    this.id = 1;
    this.recuperarClave = function (){ // métodos
        console.log('Recuperando clave...');
    }
}

let usuario = new usuario();

console.log(usuario);
