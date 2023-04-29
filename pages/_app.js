import '@/styles/globals.css'
import MyProvider from '@/components/MyProvider'


export default function App({ Component, pageProps }) {
  return (
    <MyProvider>

      <Component {...pageProps} />
    </MyProvider>
  )
}
