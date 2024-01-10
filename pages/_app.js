import '../styles/globals.css'
import Navbar from "../component/navbar";

function MyApp({ Component, pageProps }) {
  return <div className='bg-gradient-to-br from-neutral-600 to-gray-900 min-h-screen'>

    <Component
        {...pageProps}
    />
  </div>
}

export default MyApp
