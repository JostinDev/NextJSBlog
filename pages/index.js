import Head from 'next/head'
import Image from "next/image"
import Portrait from "/public/portrait.png"
import Link from "next/link"
import {useEffect} from "react"
import { useStores } from '../hooks/use-stores'
import bg from '../public/portrait.png'
import justin from '../public/justin.jpg'
import just1 from '../public/just1.jpg'
import just1test from '../public/just1test.png'
import just1test2 from '../public/just1test2.png'

export default function Home() {
  const { navStore } = useStores()
  useEffect(() => {
  },[]);


  return (
    <div className='container mx-auto' id='container'>
      <Head>
        <title>Justin Nydegger</title>
        <meta name="description" content="Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex gap-14 rounded-[40px] bg-black p-6 w-full mx-auto max-w-[1400px] min-h-[1000px] absolute top-6 bottom-6 left-0 right-0'>
        <div className='w-[500px] rounded-l-2xl bg-center bg-no-repeat bg-cover p-8' style={{backgroundImage: `url(${just1test2.src})`}}>
          <p className='text-white text-4xl'>Justin</p>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex flex-1 justify-between pt-10 gap-4'>

            <div className='flex flex-col flex-1 min-w-0 gap-2'>
              <h1 className='text-xl text-white'>Contact me</h1>
              <h2 className='text-md text-gray-500'>justin@nydegger.me</h2>
              <h2 className='text-md text-gray-500'>@LeJostin - x.com</h2>
              <h2 className='text-md text-gray-500'>@justinnydegger - instagram.com</h2>
            </div>

            <div className='flex flex-col flex-1 min-w-0 gap-2'>
              <h1 className='text-xl text-white'>Education</h1>
              <h2 className='text-md text-gray-500'>
                Bachelor in Computer science (2018 - 2021)
              </h2>
              <h2 className='text-md text-gray-500'>
                Apprenticeship in software development (2013 - 2017)
              </h2>
            </div>

            <div className='flex flex-col flex-1 min-w-0 gap-2'>
              <h1 className='text-xl text-white'>Professional experience</h1>
              <h2 className='text-md text-gray-500'>Software engineer at Adnovum (December 2021 - now)</h2>
              <h2 className='text-md text-gray-500'>Application developer at Geodis - Dublin (2018 - 7 months)</h2>
              <h2 className='text-md text-gray-500'>Freelancer (2013 - now)</h2>
              <h2 className='text-md text-gray-500'>Apprentice application developer for HEAI - Switzerland (2013 - 2017)</h2>
            </div>

          </div>
          <div className='flex flex-1 justify-between pt-10'>
            <div className='flex flex-col flex-1 min-w-0'>
              <h1 className='text-xl text-white'>Contact me</h1>
              <h2 className='text-lg text-gray-500'>justin@nydegger.me</h2>
            </div>
            <div className='flex flex-col flex-1 min-w-0'>
              <h1 className='text-xl text-white'>Projects</h1>
              <h2 className='text-lg text-gray-500'>Projects</h2>
            </div>
            <div className='flex flex-col flex-1 min-w-0'>
              <h1 className='text-xl text-white'>Projects</h1>
              <h2 className='text-lg text-gray-500'>Projects</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
