import Head from 'next/head'
import Render from "../component/render";
import renders from "../data/renderData";
import Link from "next/link";

export default function Renders() {
  return (
    <div className='container mx-auto px-4 lg:px-30 xl:px-48'>
      <Head>
        <title>Renders</title>
        <meta name="description" content="Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='relative'>
        <p className='my-10 text-4xl font-medium text-white'>Renders</p>
        <Link href={'/'} className='text-white absolute top-0 -ml-32'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10 fill-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <div className='flex flex-wrap'>
          {renders.data.map(({ title, img, date, link }, index) => (
            <Render key={index} title={title} img={img} date={date} link={link}/>
          ))}
        </div>
      </div>
    </div>
  )
}