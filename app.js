const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.use('/src', express.static('src'));

app.listen(3000, () => {
    console.log('[Express] Listening on 3000');
});