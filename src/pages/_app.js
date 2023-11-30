import { SessionProvider } from 'next-auth/react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import "react-datepicker/dist/react-datepicker.css";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  )
}
