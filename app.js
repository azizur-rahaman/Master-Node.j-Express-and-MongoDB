const http = require('http');


const server = http.createServer((req, res) => {
    res.end("<h1>Your first simple web server<h1/>");
});

server.listen(4000, ()=> {
    console.log("Server is running on port 4000");
})