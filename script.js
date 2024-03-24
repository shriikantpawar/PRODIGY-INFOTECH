// Replace with your API key and the API endpoint
const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.weatherapi.com/v1/current.json';

function getWeather() {
    const location = document.getElementById('location').value;

    // Make an API request
    fetch(`${apiUrl}?key=${apiKey}&q=${location}`)
        .then(response => response.json())
        .then(data => {
            const locationName = data.location.name;
            const temperature = data.current.temp_c;
            const condition = data.current.condition.text;

            // Update the HTML elements with the retrieved data
            document.getElementById('locationName').textContent = `Location: ${locationName}`;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('condition').textContent = `Condition: ${condition}`;
            // Add more elements for other information as needed
        })
        .catch(error => console.error(error));
}
