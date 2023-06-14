import Head from "next/head"
import Navbar from "@/components/Navbar"

import { table, minifyRecords } from "./api/utils/airtable"
import Todo from "@/components/Todo"

export default function index ({ initialTodos }) {
  // console.log(initialTodos)
  return (
    <div>
      <Head>
        <title>Todos App</title>
      </Head>
      <Navbar />
      <main>
        <h1>Todos App</h1>
        <ul>
          { initialTodos.map(todo => <Todo key={ todo.id } todo={ todo } />) }
        </ul>
      </main>
    </div>
  )
}

// fetch Airtable data on this component render or build
export async function getServerSideProps (context) {
  try
  {
    const todos = await table.select({}).firstPage()
    return {
      props: {
        initialTodos: minifyRecords(todos)
      }
    }
  } catch (err)
  {
    console.log(err)
    return {
      props: {
        err: 'Something went wrong'
      }
    }
  }
}