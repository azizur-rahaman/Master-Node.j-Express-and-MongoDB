const express = require('express');

const app = express();

app.set('views', __dirname, 'views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Ordering the Routes is important
app.get('/', (req, res) => {
    res.render('index');
});

// Passing values to the view

app.get('/user/:id/:username', (req, res) =>{
    let id = req.params.id;
    let username = req.params.username;

    res.render('index', {id: id, username: username});
});

app.get('*', (req, res) => {
    res.send('404 Page Not Found');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000: http://localhost:3000');
});