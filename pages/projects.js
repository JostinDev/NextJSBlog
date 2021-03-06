import Head from 'next/head'
import Project from "../component/project";

export default function Projects() {

  const projectData = [
    {
      title: 'Website VR visualisation in Three.js',
      description: 'My Bachelor\'s final work. The goal was to create a world in VR and represent the data of an existing website inside it',
      img: '/images/projects/TB.png',
      date: 'July 20 , 2021',
      link: 'https://vr.nydeggerdevelopment.ch/world/'
    },
    {
      title: 'SwissMeca',
      description: 'Website for a company which mission is to develop and supply innovative mechanical and mechatronic solutions to industrial customers',
      img: '/images/projects/swissMeca.png',
      date: 'February 05, 2021',
      link: 'https://www.swissmeca.ch/?lang=en'
    },
    {
      title: 'Cave aux hirondelles',
      description: 'E-commerce website of a winemaker wishing to promote his products',
      img: '/images/projects/caveAuxHirondelles.png',
      date: 'September 28, 2020',
      link: 'https://caveauxhirondelles.ch/'
    },
    {
      title: 'Acer Jardin',
      description: 'Website of a gardener who wants to create an online presence',
      img: '/images/projects/acer.png',
      date: 'February 14, 2020',
      link: 'https://acer-jardin.ch/'
    },
    {
      title: 'Andy Natural',
      description: 'E-commerce website of a freelance photographer who wants to showcase his work',
      img: '/images/projects/andyNatural.png',
      date: 'July 15, 2019',
      link: 'https://andy-natural.com/'
    },
    {
      title: 'Maternelle Les petits lapins',
      description: 'Website for a nursery school in the region of Fribourg',
      img: '/images/projects/maternelle.png',
      date: 'April 18, 2019',
      link: 'https://maternellelespetitslapins.ch/'
    },
  ]

  return (
    <div className='container mx-auto px-4 lg:px-30 xl:px-48'>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p className='my-10 text-6xl font-medium text-gray-800'>Projects</p>
        <div className='flex flex-wrap'>
          {projectData.map(({ title, description, img, date, link }, index) => (
            <Project key={index} title={title} description={description} img={img} date={date} link={link}/>
          ))}
        </div>
      </div>
    </div>
  )
}
