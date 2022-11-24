//en este archivo vamos a utilizar todo lo relacionado al REQ y RES

const taskControllers = require('./tasks.controller')


//* taskControllers.createTodo()

const getAllTodos = (req, res) => {
    const data = taskControllers.findAllTodos()
    res.data(200).json(data)
}

const getTodoById = () => {
    const id = req.params.id
    const data = taskControllers.findTodoById(id)
    if(data){
        res.status(200).json(data)
    }else{
        res.status(404).json({messeger: 'Invalid ID'})
    }
}

const postTodo = () => {
    const {title, description} = req.body
    if(title && description){
        const data = taskControllers.createTodo({title, description})
        res.status(201).json(data)
    }else {
        res.status(400).json({messeger: 'Invalid ID'})
    }
}

module.exports = {
    getAllTodos,
    getTodoById,
    postTodo
}