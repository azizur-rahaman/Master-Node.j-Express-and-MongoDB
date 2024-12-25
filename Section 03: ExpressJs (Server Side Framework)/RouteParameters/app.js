const express = require('express');

const app = express();

app.get('/questions/:id/:title/', (req, res) => {
    let id = req.params.id;
    let title = req.params.title;

    res.send('Hello World')
});

app.get('/users/:id/:username/', (req, res) => {
    let id = req.params.id;
    let username = req.params.username;

    res.send(`id: ${id}, username: ${username}`);
});
app.listen(3000, () => {
    console.log('Server is running on port 3000: http://localhost:3000');
});