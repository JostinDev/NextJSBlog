import '../styles/globals.css'
import Navbar from "../component/navbar";

function MyApp({ Component, pageProps }) {
  return (
      <div className='bg-gradient-to-br from-neutral-600 to-gray-900 min-h-screen h-full'>
        <div className='container mx-auto pb-12' id='container'>
          <div className='flex gap-14 rounded-[40px] bg-black p-6 w-full mx-auto max-w-[1600px] min-h-[1000px] relative top-6 bottom-6 left-0 right-0'>
            <Component
                {...pageProps}
            />
          </div>
        </div>
      </div>
  )

}

export default MyApp
