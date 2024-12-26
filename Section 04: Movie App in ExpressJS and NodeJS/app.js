const express = require('express');
const app = express();
const path = require('path');
const request = require('request');

//middleware
app.use(express.static('public'));

//set view engine and views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('search');
});

app.get('/results', (req,res) => {
    let apiKey = "46a27dc09ce3f06565d7b451cce92e21";
    let accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmEyN2RjMDljZTNmMDY1NjVkN2I0NTFjY2U5MmUyMSIsIm5iZiI6MTczNTE5NjczNy4xMjgsInN1YiI6IjY3NmQwMDQxNDE0MTlhYTg1MDkyN2FkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUc-cYvAYGCU7zVGhjOAW_3ogN_JB3drLOhn3yCi-Jo";
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${req.query.search}`;
    
    console.log("URL: ", url);
    
    request(url, (error, response, body) => {
        console.log(url);

        if(error){
            console.log('Error:', error);
            return;
        }

        let data = JSON.parse(body);
        res.render('movies', {name: req.query.search, data: data});
        return;
    });
});


app.listen(3000, ()=>{
    console.log('Server is running on port 3000: http://localhost:3000');
});