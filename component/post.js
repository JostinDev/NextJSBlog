import Image from 'next/image'
import Link from "next/link";

export default function Post({title, id, date, img}) {

  return (
    <div className='flex flex-col w-full md:w-1/2 lg:w-1/3 inline-flex px-4 mb-10'>
      <Image src={img} height={1080} width={1920} layout={"intrinsic"} alt={''} className='max-w rounded-sm'/>
      <p>{date}</p>
      <Link href={'posts/' +id} passHref>
        <p>{title}</p>
      </Link>
    </div>
  )
}