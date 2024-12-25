const express = require('express');

const app = express();

// Ordering the Routes is important
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// Passing values to the view

app.get('/user/:id/:username', (req, res) =>{
    let id = req.params.id;
    let username = req.params.username;

    res.render('index.ejs', {id: id, username: username});
});

app.get('*', (req, res) => {
    res.send('404 Page Not Found');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000: http://localhost:3000');
});