//? Este archivo va a manejar todo lo relacionado a acciones de la base de datos de todo's
const Tasks = require('../models/task.model')

const todoDB = []
//? TODO 
//* {
//*     id: 5,
//*     title: 'Practicar express',
//*     description: 'Ver videos de apoyo y crear otra API',
//*     is_completed: false
//* }

let id = 1

const findAllTodos = async() => {
    //? Esta funcion debe de traer todos los todo's de mi base de datos
    const data = await Tasks.findAll()
    return data
}

const findTodoById = (id) => {
    //? Esta funcion debe de retornar un todo dependiendo el id
    const todo = todoDB.find(item => item.id == id)
    return todo
}

const createTodo = (obj) => {
    //? Esta funcion debe de crear un nuevo todo en mi base de datos y retornar el todo creado
    const newTodo = {
        id: id++,
        title: obj.title,
        description: obj.description,
        is_completed: false
    }
    todoDB.push(newTodo)
    return newTodo
}

module.exports = {
    findAllTodos,
    findTodoById, 
    createTodo
}