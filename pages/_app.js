import '@/styles/globals.css'

import { TodosProvider } from '@/contexts/TodosContext'
import { UserProvider } from '@auth0/nextjs-auth0/client'

export default function App ({ Component, pageProps }) {
  return (
    <UserProvider>
      <TodosProvider>
        <div className="container mx-auto my-10 max-w-xl">
          <Component { ...pageProps } />
        </div>
      </TodosProvider>
    </UserProvider>
  )
}
