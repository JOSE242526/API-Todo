/* dependencias*/
const express = require('express');

const db = require('./utils/database')
const taskRouter = require('./tasks/tasks.router');
const app = express();

const port = 9000

/* Habilitacion o recibiendo Json*/
app.use(express.json())


db.authenticate()
    .then(() => console.log('Database Sincronizada correctamente'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database Sincronizada correctamente'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.json({
    messeger: 'probando'
    })
})

app.use('/', taskRouter)


app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})


/* 

const todoDB = []

let id = 1

app.get('/todo', (req, res) => {
res.status(200).json(todoDB)
})

app.post('/todo', (req, res) => {
        const {title, description} = req.body

        if(title && description){
            const newTodo = {
                id: id++,
                title,
                description,
                is_completed: false
            }
            todoDB.push(newTodo)
            res.status(200).json(newTodo)
        } else {
            res.status(400).json({message: 'Invalid data'})
        }
    })


app.get('/todo/:id', (req, res) => {
    const id = req.params.id;
    
    const todo = todoDB.find(item => item.id == id)
    
    if(todo){
        res.status(200).json(todo)
    } else {
        res.status(404).json({message: 'Invalid ID'})
    }
}) */
