import { useEffect, useContext } from "react"
import { table, minifyRecords } from "./api/utils/airtable"
import { useUser } from "@auth0/nextjs-auth0/client"
import Head from "next/head"

import Navbar from "@/components/Navbar"
import Todo from "@/components/Todo"
import { TodosContext } from '@/contexts/TodosContext'

export default function index ({ initialTodos }) {
  const { todos, setTodos } = useContext(TodosContext)
  const {user} = useUser()
  console.log(user)
  useEffect(() => {
    setTodos(initialTodos)
  }, [])

  return (
    <div>
      <Head>
        <title>Todos App</title>
      </Head>
      <Navbar user={user} />
      <main>
        <h1>Todos App</h1>
        <ul>
          { todos &&
            todos.map((todo) => <Todo key={ todo.id } todo={ todo } />) }
        </ul>
      </main>
    </div>
  )
}

// fetch Airtable data on this component render or build
export async function getServerSideProps (context) {
  try {
    const todos = await table.select({}).firstPage()
    return {
      props: {
        initialTodos: minifyRecords(todos)
      }
    }
  } catch (err) {
    console.log(err)
    return {
      props: {
        err: 'Something went wrong'
      }
    }
  }
}