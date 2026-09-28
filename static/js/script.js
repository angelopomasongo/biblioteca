// 1. Mostrar mensaje con el correo al hacer clic en Ingresar
function mostrarCorreo() {
    const correo = document.querySelector('#correo').value;
    if (correo) {
        alert("Iniciando sesión con: " + correo);
    } else {
        alert("Por favor, ingresa un correo electrónico.");
    }
}

// 2. Incrementar contador de libros en el carrito
let contador = 0;
function sumarCarrito() {
    contador++;
    document.querySelector('#num-carrito').textContent = contador;
}

// 3. Cambiar la imagen por el video al pasar el mouse por encima
const imagen = document.querySelector('#imagen-principal');
const video = document.querySelector('#video-principal');

// Al entrar con el cursor a la imagen: oculta imagen, muestra y reproduce video
imagen.addEventListener('mouseenter', function() {
    imagen.style.display = 'none';
    video.style.display = 'block';
    video.play();
});

// Al salir con el cursor del video: pausa y oculta video, vuelve a mostrar la imagen
video.addEventListener('mouseleave', function() {
    video.pause();
    video.style.display = 'none';
    imagen.style.display = 'block';
});