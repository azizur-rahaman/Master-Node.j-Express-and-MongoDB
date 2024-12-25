const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<a href="/contact">Contact Us</a> <br> <a href="/about">About Us</a>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Page</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Us Page</h1>');
});

app.listen(300, ()=> {
    console.log("Server is running on port 3000");
})
