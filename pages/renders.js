import Head from 'next/head'
import Render from "../component/render";
import renders from "../data/renderData";
import Link from "next/link";
import Image from "next/image";
import arrow from "../public/arrow.svg";
export default function Renders() {


  return (
    <div className='container mx-auto px-4 lg:px-30 xl:px-48'>
      <Head>
        <title>Renders</title>
        <meta name="description" content="Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='relative'>
        <p className='my-10 text-6xl font-medium text-white'>Renders</p>
        <Link href={'/'} className='text-white absolute top-2 -ml-32'>
          <Image width={50} height={50} src={arrow}/>
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