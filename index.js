const express = require('express');

let app = express();


app.use(express.json())

const PORT = 5000;
// temp database
const tasks = []

//create a Task
app.post('/tasks', (req, res) =>{
    const task = {
        'id':req.body.id,
        'title': req.body.title,
        'description': req.body.description,
        'priority': req.body.priority,
        'emoji': req.body.emoji,
    }

    tasks.push(task);
    res.json({
        'status': 'success',
        'data': task
    })
})

//To read all tasks
app.get('/tasks', (req, res) =>{
    res.json({
        'Status': 'success',
        'data':  tasks
    })
    
})

// To read specific task
app.post('get_task', (req, res)=>{
    const id = req.body.id;

     let resultTask;
    tasks.map((task) => {
        if(task.id === id) {
            resultTask = task;

        }
    })

    res.json({
        'status': 'success',
        'data': resultTask
    })
})


//Delete all Tasks
app.post('/delete_tasks', (req, res)=>{
    tasks = []
    res.json({
        'status': 'success',
        'data': resultTask
    })
})

app.listen(PORT, ()=>{
    console.log('Server started running on port',PORT);
})

