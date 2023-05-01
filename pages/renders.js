import Head from 'next/head'
import Render from "../component/render";

export default function Renders() {

  const renderData = [
    {
      title: 'Endless Engine',
      img: '/images/renders/endlessEngine.png',
      date: 'March 2023',
      link: 'https://www.youtube.com/watch?v=AfIBZQt8M1k&ab_channel=Lejostin'
    },
    {
      title: 'Lonely Mountain',
      img: '/images/renders/lonelyMountain.png',
      date: 'December 2022',
      link: 'https://www.youtube.com/watch?v=ft-J7tZW6ks&ab_channel=Lejostin'
    },
    {
      title: 'Place To Bee',
      img: '/images/renders/placetobee.png',
      date: 'November 2022',
      link: 'https://www.instagram.com/p/CmQ6TICqNOp/'
    },
    {
      title: 'Morning lift',
      img: '/images/renders/morningLift.png',
      date: 'October 2022',
      link: 'https://www.youtube.com/watch?v=myu3X4HxaMM&ab_channel=Lejostin'
    },
    {
      title: 'Moving Meditation',
      img: '/images/renders/movingMeditation.png',
      date: 'September 2022',
      link: 'https://www.youtube.com/watch?v=xazhC13XDdY&ab_channel=Lejostin'
    },
    {
      title: 'Mountain sunrise',
      img: '/images/renders/mountainSunrise.png',
      date: 'July 2022',
      link: 'https://www.youtube.com/watch?v=0o6b_miA0g0&ab_channel=Lejostin'
    },
    {
      title: 'Black Swan',
      img: '/images/renders/blackSwan.png',
      date: 'June 2022',
      link: 'https://youtube.com/shorts/cuA9zYhzz-s'
    },
    {
      title: 'Ocean feels',
      img: '/images/renders/oceanFeels.png',
      date: 'May 2022',
      link: 'https://youtube.com/shorts/tp5_Jyq57qg'
    },
    {
      title: 'Backrooms',
      img: '/images/renders/backrooms.png',
      date: 'May 2022',
      link: 'https://youtube.com/shorts/ZJI_BDFPRws'
    },
    {
      title: 'Wood Marble',
      img: '/images/renders/woodMarble.png',
      date: 'April 2022',
      link: 'https://www.youtube.com/watch?v=O569I4sHh4E&ab_channel=Jostin'
    },
    {
      title: 'Happy Easter',
      img: '/images/renders/happyEaster.jpeg',
      date: 'March 2022',
      link: 'https://youtu.be/NKdtVtZ2gI4'
    },
    {
      title: 'Infinite journey',
      img: '/images/renders/infiniteJourney.jpeg',
      date: 'February 2022',
      link: 'https://youtu.be/UK4OzTiXk_8'
    },
    {
      title: 'Simple marble',
      img: '/images/renders/simpleMarble.jpeg',
      date: 'January 2022',
      link: 'https://youtu.be/xomO2GqZmVo'
    },
    {
      title: 'Under the sea',
      img: '/images/renders/seaTentacles.png',
      date: 'January 2022',
      link: 'https://youtu.be/yRck7LdBuKc'
    },
    {
      title: 'Sci-fi Loops',
      img: '/images/renders/loops.png',
      date: 'January 2022',
      link: 'https://www.youtube.com/watch?v=f82_KUMPwcI'
    },
    {
      title: 'Outer Wilds',
      img: '/images/renders/outerWilds.png',
      date: 'January 2022',
      link: 'https://www.youtube.com/watch?v=jksrXT73zCQ&ab_channel=Jostin'
    },
    {
      title: 'Donut',
      img: '/images/renders/donutGuru.png',
      date: 'December 2021',
      link: 'https://www.youtube.com/watch?v=vfotM4Artls&ab_channel=Jostin'
    },
    {
      title: 'Cube world',
      img: '/images/renders/cube.png',
      date: 'November 2021',
      link: 'https://www.youtube.com/watch?v=IPeA2H-Yy6M&ab_channel=Jostin'
    },
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