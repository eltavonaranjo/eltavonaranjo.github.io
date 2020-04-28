/*global document, window, alert, console, require, prompt*/

var miImage = document.querySelector('img');
var miTitulo = document.querySelector('h1');
var miBoton = document.querySelector('button');

miImage.onclick = function () {
    'use strict';
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/medellin.jpeg') {
        miImage.setAttribute('src', 'images/medellin2.jpeg');
        miTitulo.innerHTML = 'La ciudad mas bella';
    } else {
        miImage.setAttribute('src', 'images/medellin.jpeg');
        miTitulo.innerHTML = 'se llama Medellín';
    }
};

function estableceNombreUsuario() {
    'use strict';
    
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Medellín es preciosa, ' + miNombre;
    
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
} else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.innerHTML = 'Bienvenido, ' + nombreAlmacenado;
}

miBoton.onclick = function () {
    'use strict';
    estableceNombreUsuario();
};