const fs = require('fs');
const request = require('request');


const readFilePromise = (fileName) => {
    return new Promise(((resolve, rejects) => {
        fs.readFile(fileName, (error, data) => {
            if(error) rejects(error);
            resolve(data);
        });
    }));
};



let apiKey = "46a27dc09ce3f06565d7b451cce92e21";

readFilePromise('movies.txt')
    .then((query) => {
        return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    })
    .then((url) => {
        request(url, {timeout: 0}, (error, response, body) => {
            if(error) return console.log('Error:', error);

            let res = JSON.parse(body);

            res.results.forEach((movieData) => {
                console.log(movieData.original_title);
            })
        });
    }).catch((error) => {
        console.log('Error:', error);
    });