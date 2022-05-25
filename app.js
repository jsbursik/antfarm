const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/src/antfarm.js', (req, res) => {
    res.sendFile(__dirname + "/src/antfarm.js");
});

app.get('/src/ant.js', (req, res) => {
    res.sendFile(__dirname + "/src/ant.js");
});

app.listen(3000, () => {
    console.log('[Express] Listening on 3000');
});