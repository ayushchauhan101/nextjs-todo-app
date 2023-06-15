import { useContext } from "react"
import { TodosContext } from "@/contexts/TodosContext"

export default function Todo ({ todo }) {

    const { updateTodos, deleteTodos } = useContext(TodosContext)

    async function toggleCompletedHandler () {
        const updatedFields = {
            ...todo.fields,
            completed: !todo.fields.completed
        }
        const updatedTodo = { id: todo.id, fields: updatedFields }
        updateTodos(updatedTodo)
    }

    return (
        <li className="bg-white flex items-center shadow-lg rounded-lg my-2 py-2 px-4 justify-between">
            <input
                type="checkbox"
                name="completed"
                className="mr-2 h-5 w-5"
                onChange={ toggleCompletedHandler }
                checked={ todo.fields.completed }
            />
            <p className={ `flex-1 text-gray-800 ${todo.fields.completed && 'line-through'} ` } >
                { todo.fields.description }
            </p>
            <button
                type="button"
                onClick={ () => deleteTodos(todo.id) }
                className="text-sm bg-red-400 hover:bg-red-600 hover:text-white py-1 px-2 rounded duration-100 ease-in">
                Delete
            </button>
        </li>
    )
}