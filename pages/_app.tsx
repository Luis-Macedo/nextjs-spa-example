import '../styles/globals.css'
import Head from "next/head";
import type { AppProps } from 'next/app'
import Sidebar from '../src/shared/sidebar'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../src/shared/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Sidebar/>
      <div className="container mt-5">
        <Component {...pageProps} />
      </div>
      
      <Footer/>
    </>
  )
}

export default MyApp
