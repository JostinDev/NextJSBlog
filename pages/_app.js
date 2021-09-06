import '../styles/globals.css'
import Navbar from "../component/navbar";

function MyApp({ Component, pageProps }) {
  return <div className='bg-gray-100 min-h-screen'>
    <Navbar/>
    <Component
        {...pageProps}
    />
  </div>
}

export default MyApp
