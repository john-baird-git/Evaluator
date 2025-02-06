// Use the API key from config
function makeApiCall() {
    fetch('https://api-url.com', {
        headers: {
            'Authorization': `Bearer ${config.API_KEY}`
        }
    })
    .then(response => response.json())
    .then(data => console.log(data));
}