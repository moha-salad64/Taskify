const http = require('http');

const HostName = 'localhost'; 
const port = 9000;

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/tasks')){
        taskRoutes(req, res)
    }

})

server.listen(port, HostName , () =>{
    console.log(`server running on port ${port}`);
})