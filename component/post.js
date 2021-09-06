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
        <Link href={'posts/' + id} passHref>
          <p className='inline-block cursor-pointer text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-300 hover:via-pink-400 hover:to-red-400'>{title}</p>
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
          <Link href={'posts/' + id} passHref>
            <p className='inline-block text-lg cursor-pointer md:text-3xl lg:text-4xl font-medium md:font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-300 hover:via-pink-400 hover:to-red-400'>{title}</p>
          </Link>
        </div>
      </div>
    )
  }
}