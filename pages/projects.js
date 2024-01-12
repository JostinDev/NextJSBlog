import Head from 'next/head'
import Project from "../component/project";
import Link from "next/link";
import arrow from '../public/arrow.svg'
import Image from "next/image";
import projects from "../data/projectData";

export default function Projects() {

  return (
    <div className='container mx-auto px-4 lg:px-30 xl:px-48'>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='relative'>
        <p className='my-10 text-6xl font-medium text-white'>Projects</p>
        <Link href={'/'} className='text-white absolute top-2 -ml-32'>
          <Image width={50} height={50} src={arrow}/>
        </Link>

        <div className='flex flex-wrap'>
          {projects.data.map(({ title, description, img, date, link }, index) => (
            <Project key={index} title={title} description={description} img={img} date={date} link={link}/>
          ))}
        </div>
      </div>
    </div>
  )
}
