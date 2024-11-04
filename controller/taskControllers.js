const {IncomingForm} = require('formidable');

const { readTasksfromFile, writeTasktoFile } = require("../utils/fileHandler");
const { copyFileSync } = require('fs');
const path = require('path');

// get tasks from file
exports.getTasks = (req , res) =>{
    const tasks = readTasksfromFile();
    res.writeHead(200 , 'content-type' , 'application/json');
    res.end(JSON.stringify(tasks));
}

//create task list
exports.createTask = (req , res) =>{
    const form = new IncomingForm();
    form.parse(req , (err , fields , files) => {
        
        if(err){
            res.writeHead(400 , {'content-type': 'application/json'});
            res.end(JSON.stringify({ message : 'Error parsing form'}));
            return;
        }

        const image = files.image[0];
        const tasks = readTasksfromFile();

        const newTasks = {
            id: Date.now(),
            title: fields.title,
            description: fields?.description || "not description",
            status: fields?.status || 'pending',
            image: image? `/uploads/${image.originalFilename}` : null,
        }

        tasks.push(newTasks);
        writeTasktoFile(tasks);

        if(files.image) {
            copyFileSync(image.filepath, path.join(__dirname, '../uploads' , image.originalFilename));
            res.end(JSON.stringify(newTasks));
        }
    }); 
    
}

exports.updateTask = (req , res) => {
    res.end(JSON.stringify({message: 'Task updated successfully'}))
}

exports.deleteTask = (req , res) => {
    res.end(JSON.stringify({ message: 'Task deleted successfully'}));
}