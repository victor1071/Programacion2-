// Simulación de captura de imagen (reemplazar con la lógica real)
function captureImage() {
    const apiKey = 'DEMO_KEY'; // Reemplaza 'DEMO_KEY' con tu propia clave API de la NASA
    const randomDate = getRandomDate();
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${randomDate}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('capturedImage').src = data.url;
        })
        .catch(error => console.error('Error fetching the image:', error));
}
// script.js

document.addEventListener('DOMContentLoaded', function() {
    var btnMoveHorizontal = document.getElementById('btnMovehorizontal');
    
    btnMoveHorizontal.addEventListener('click', function() {
        var phoneNumber = '+56991395701'; // Reemplaza con el número de teléfono que deseas
        var message = 'Hola, necesito soporte con el telescopio.'; // Mensaje predefinido
        var whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
        
        window.open(whatsappUrl, '_blank');
    });
});

function getRandomDate() {
    const start = new Date(1995, 5, 16); // La fecha de inicio del APOD
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

// Ejemplo de uso
captureImage();




// Event listeners para los botones
document.getElementById('btnMoveUp').addEventListener('click', () => {
    // Lógica para mover el telescopio hacia arriba
    console.log('Moviendo el telescopio hacia arriba');
});

document.getElementById('btnMoveDown').addEventListener('click', () => {
    // Lógica para mover el telescopio hacia abajo
    console.log('Moviendo el telescopio hacia abajo');
});

document.getElementById('btnMoveLeft').addEventListener('click', () => {
    // Lógica para mover el telescopio hacia la izquierda
    console.log('Moviendo el telescopio hacia la izquierda');
});

document.getElementById('btnMoveRight').addEventListener('click', () => {
    // Lógica para mover el telescopio hacia la derecha
    console.log('Moviendo el telescopio hacia la derecha');
});

document.getElementById('btnCaptureImage').addEventListener('click', () => {
    // Lógica para capturar una imagen
    captureImage();
});
