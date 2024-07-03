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
