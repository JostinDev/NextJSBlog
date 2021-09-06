import Image from 'next/image'
import Link from "next/link";

export default function Post({title, id, date, img, isFirstPost}) {

  const dateString = date
  const year = dateString.substring(0,4)
  const month = dateString.substring(5,7)
  const day = dateString.substring(8,10)

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  if(!isFirstPost) {
    return (
      <div className='flex flex-col flex-wrap h-full w-full md:w-1/2 lg:w-1/3 inline-flex px-4 mb-10'>
        <Image src={img} height={1080} width={1920} layout={"intrinsic"} alt={''} className='max-w rounded'/>
        <p className='mt-2 text-gray-500 text-sm'>{monthNames[month-1] + ' ' + day + ', ' + year}</p>
        <p className='text-gray-700 text-lg font-medium'>{title}</p>
        <Link href={'posts/' + id} passHref>
          <a type="button" className="w-max mt-2 py-2 px-4 font-semibold cursor-pointer rounded text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-300 hover:via-pink-400 hover:to-red-400">
            Read
          </a>
        </Link>
      </div>
    )
  } else {
    return (
      <div className='flex flex-col md:flex-row w-full px-4 mb-10'>
        <div className='w-full md:w-4/6'>
          <Image src={img} height={1080} width={1920} layout={"intrinsic"} alt={''} className='rounded'/>
        </div>
        <div className='flex flex-col md:pl-6'>
          <p className='mt-2 mb-3 text-gray-500 text-sm'>{monthNames[month-1] + ' ' + day + ', ' + year}</p>
          <p className='text-lg md:text-3xl lg:text-4xl font-medium md:font-normal'>{title}</p>
          <Link href={'posts/' + id} passHref>
            <a type="button" className="w-max mt-3 py-3 px-6 font-semibold cursor-pointer rounded text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-300 hover:via-pink-400 hover:to-red-400">
              Read
            </a>
          </Link>
        </div>
      </div>
    )
  }
}