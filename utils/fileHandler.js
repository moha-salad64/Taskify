const fs = require("fs");
const path = require("path");

const filePath = './data/task.json';

//write the task method 

exports.writeTasktoFile = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks));
}

//read the task method
exports.readTasksfromFile = (tasks) => {
    if(!fs.existsSync(filePath)){
        this.writeTasktoFile([]);
    }

    const data = fs.readFileSync(filePath);
    return JSON.parse(data);

}