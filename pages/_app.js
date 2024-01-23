import '../styles/globals.css'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const isLoginPage = router.pathname === '/'

  return (
      <div className='flex bg-gradient-to-br from-blue-950 to-gray-900 min-h-screen'>
        <div className={`flex flex-1 w-full xl:container mx-auto pb-12 px-4 max-w-[1600px] ${isLoginPage ? 'lg:max-h-[1100px]' : ''} `}>
          <div className='flex gap-14 rounded-[40px] bg-black p-6 w-full mx-auto relative top-6 bottom-6 left-0 right-0'>
            <Component
                {...pageProps}
            />
          </div>
        </div>
      </div>
  )
}

export default MyApp
