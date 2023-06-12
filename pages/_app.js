import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="container mx-auto my-6">
      <Component {...pageProps} />
    </div>
  )
}
