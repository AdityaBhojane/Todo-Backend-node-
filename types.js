const z = require('zod');

const ToDoValidation = z.object({
    id:z.string(),
    title:z.string(),
    description:z.string(),
})

module.exports = {
    createTodo: ToDoValidation
}