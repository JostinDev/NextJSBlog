import Head from 'next/head'
import Project from "../component/project";
import Link from "next/link";
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
        <p className='my-10 text-4xl font-medium text-white'>Projects</p>
        <Link href={'/'} className='text-white absolute top-0 -ml-32'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10 fill-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
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
