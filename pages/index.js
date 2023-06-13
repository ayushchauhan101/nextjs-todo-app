import Head from "next/head"
import Navbar from "@/components/Navbar"

const index = () => {
  return (
    <div>
      <Head>
        <title>Todos App</title>
      </Head>
      <Navbar />
      <main>
        <h1>Todos App</h1>
      </main>
    </div>
  )
}
export default index