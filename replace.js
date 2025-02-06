const fs = require('fs');

const apiKey = process.env.API_KEY;
const content = fs.readFileSync('index.html', 'utf8');
const replaced = content.replace('ANTHROPIC_API_KEY_PLACEHOLDER', apiKey);
fs.writeFileSync('index.html', replaced);