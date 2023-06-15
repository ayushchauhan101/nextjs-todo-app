import { createContext, useState } from "react";

const TodosContext = createContext()

const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState([])

    async function refreshTodos () {
        try {
            const res = await fetch('/api/todos')
            const latestTodos = await res.json()
            setTodos(latestTodos)
        } catch (err) {
            console.log(err)
        }
    }

    async function addTodos (description) {
        try {
            const res = await fetch('/api/create', {
                method: 'POST',
                body: JSON.stringify({ description }),
                headers: { 'Content-type': 'application/json' }
            })
            const newTodos = await res.json()
            setTodos((prevTodos) => {
                return [newTodos, ...prevTodos]
            })
        } catch (err) {
            console.log(err)
        }
    }

    async function updateTodos (updatedTodo) {
        try {
            const res = await fetch('/api/update', {
                method: 'POST',
                body: JSON.stringify({ updatedTodo }),
                headers: { 'Content-type': 'application/json' }
            })
            await res.json()
            setTodos((prevTodos) => {
                const exisitingTodos = [...prevTodos]
                const exisitingTodo = exisitingTodos.find(todo => todo.id === updatedTodo.id)
                exisitingTodo.fields = updatedTodo.fields
                return exisitingTodos
            })
        } catch (err) {
            console.log(err)
        }
    }

    async function deleteTodos (id) {
        try {
            const res = await fetch('/api/delete', {
                method: 'POST',
                body: JSON.stringify({ id }),
                headers: { 'Content-type': 'application/json' }
            })
            await res.json()
            setTodos((prevTodos) => {
                return prevTodos.filter(todo => todo.id !== id)
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <TodosContext.Provider value={ {
            todos,
            setTodos,
            refreshTodos,
            addTodos,
            updateTodos,
            deleteTodos
        } }>
            { children }
        </TodosContext.Provider>
    )
}

export { TodosProvider, TodosContext }