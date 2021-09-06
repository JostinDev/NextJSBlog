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
      <div className='flex flex-col w-full md:w-1/2 lg:w-1/3 inline-flex px-4 mb-10'>
        <Image src={img} height={1080} width={1920} layout={"intrinsic"} alt={''} className='max-w rounded'/>
        <p className='my-3 text-gray-500 text-sm'>{monthNames[month-1] + ' ' + day + ', ' + year}</p>
        <Link href={'posts/' + id} passHref>
          <p className='text-gray-700 text-lg font-medium'>{title}</p>
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
          <p className='my-3 text-gray-500 text-sm'>{monthNames[month-1] + ' ' + day + ', ' + year}</p>
          <Link href={'posts/' + id} passHref>
            <p className='text-gray-700 text-lg md:text-4xl font-medium md:font-normal'>{title}</p>
          </Link>
        </div>
      </div>
    )
  }
}