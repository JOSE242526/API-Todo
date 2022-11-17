/* dependencias*/
const express = require('express')

/* iniciando configuracion*/
const port = 9000
const app = express()

/* Habilitacion o recibiendo Json*/
app.use(express.json())

const todoDB = []

let id = 1

app.get('/', (req, res) => {
    res.json({
    messeger: 'ok'
    })
})

/* */
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
})


app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})