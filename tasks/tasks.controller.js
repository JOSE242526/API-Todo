// este archivo va a manejar las relaciones de la base de datos

const todoDB = []
let id = 1

const findAllTodos = () => {
    //? esta funcion debe de traer todos los todo´s de mi base de datos.
    return todoDB
}

const findTodoById = (id) => {
    //esta funcion debe de retorna un todo dependiendo el id
    const todo = todoDB.find(item => item.id == id)
    return todo
}

const createTodo = (data) => {
    //esta funcion debe de crear un nuevo todo en mi base de datos y retornar el todo creado
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