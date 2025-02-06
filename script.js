// script.js
fetch('config.json')
    .then(response => response.json())
    .then(config => {
        // Use config.apiKey for your API calls
    });