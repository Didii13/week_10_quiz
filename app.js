function getRandomCat() {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const catImage = document.getElementById('catImage');
            catImage.src = data[0].url;
            catImage.alt = 'Random Cat';
        })
        .catch(error => {
            console.error('Error fetching random cat image:', error);
            alert('Error fetching random cat image. Please try again.');
        });
}