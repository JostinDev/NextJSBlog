import Head from 'next/head'
import Project from "../component/project";
import Render from "../component/render";

export default function Projects() {

  const renderData = [
    {
      title: 'My room',
      img: '/images/renders/room.png',
      date: 'September 2021',
      link: '/images/renders/room.png'
    },
    {
      title: 'Forest world',
      img: '/images/renders/forest.png',
      date: 'June 2021',
      link: '/images/renders/forest.png'
    }
  ]

  return (
    <div className='container mx-auto px-4 lg:px-30 xl:px-48'>
      <Head>
        <title>Renders</title>
        <meta name="description" content="Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p className='my-10 text-6xl font-medium text-gray-800'>Renders</p>
        <div className='flex flex-wrap'>
          {renderData.map(({ title, img, date, link }, index) => (
            <Render key={index} title={title} img={img} date={date} link={link}/>
          ))}
        </div>
      </div>
    </div>
  )
}
