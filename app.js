const http = require('http');
const taskRoutes = require('./routes/taskRoutes');

const HostName = 'localhost'; 
const port = 9000;

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/tasks')){
        taskRoutes(req, res)
    }
    else{
        res.writeHead(404 , 'Not Found' , {'content-type' : 'application/json'});
        res.end(JSON.stringify({message: 'sorry page not found'}));   
    }
})

server.listen(port, HostName , () =>{
    console.log(`server running on port ${port}`);
})