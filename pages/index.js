import Head from 'next/head'
import Link from "next/link"
import {useEffect} from "react"
import { useStores } from '../hooks/use-stores'
import just1test2 from '../public/just1test2.png'
import projects from "../data/projectData";
import renders from "../data/renderData";
export default function Home() {
  const { navStore } = useStores()
  useEffect(() => {
  },[]);


  return (
    <div className='flex gap-10'>
      <Head>
        <title>Justin Nydegger</title>
        <meta name="description" content="Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className='w-[500px] rounded-l-2xl rounded-r-sm bg-center bg-no-repeat bg-cover p-8' style={{backgroundImage: `url(${just1test2.src})`}}>
          <p className='text-white text-4xl'>Justin</p>
        </div>
        <div className='flex flex-col flex-1 pr-4'>
          <div className='flex flex-1 justify-between pt-10 gap-6'>

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
          <div className='flex flex-1 justify-between pt-10 gap-6'>
            <div className='flex flex-col flex-1 min-w-0 gap-2'>
              <h1 className='text-xl text-white'>Projects</h1>
                {projects.data.map(({ title, description, img, date, link }, index) => (
                  <h2 key={index} className='text-md text-gray-500'>{title}</h2>
                ))}
              <Link href={'/projects'} className='text-md text-gray-500'>See more...</Link>
            </div>
            <div className='flex flex-col flex-1 min-w-0 gap-2'>
              <h1 className='text-xl text-white'>Renders</h1>
              {renders.data.map(({ title, img, date, link }, index) => (
                  <h2 key={index} className='text-md text-gray-500'>{title}</h2>
              ))}
              <Link href={'/renders'} className='text-md text-gray-500'>See more...</Link>
            </div>
            <div className='flex flex-col flex-1 min-w-0'>
              <h1 className='text-xl text-white'>Projects</h1>
              <h2 className='text-md text-gray-500'>Projects</h2>
            </div>
          </div>
        </div>
      </div>
  )
}
