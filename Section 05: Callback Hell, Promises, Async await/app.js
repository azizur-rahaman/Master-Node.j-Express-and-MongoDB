const fs = require('fs');
const request = require('request');


fs.readFile('movies.txt', (error, data)=> {
    if(error) return console.log('Error:', error);

    let apiKey = "46a27dc09ce3f06565d7b451cce92e21";
    
    data.forEach((movie)=> {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movie}`;
        request(url, {timeout: 0}, (error, response, body)=> {
            if(error) return console.log('Error:', error);

            let res = JSON.parse(body);

            res.results.forEach((movieData) => {
                console.log(movieData.original_title);
            })
        });
    });

})