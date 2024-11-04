const { getTasks, createTask, updateTask, deleteTask } = require("../controller/taskControllers");

const taskRoutes = (req , res) =>{
    if(req.method === 'GET'){
        getTasks(req, res);
    }
    else if(req.method === 'POST'){
        createTask(req, res);
    }
    else if(req.method === 'PATCH'){
        updateTask(req , res);
    }

    else if(req.method === 'DELETE'){
        deleteTask(req, res);
    }
    
    else {
        res.writeHead(404 , 'Data Not Found' , {'content-type': 'application/json'});
        res.end(JSON.stringify({message: 'method is not found'}));
    }
}
module.exports = taskRoutes;