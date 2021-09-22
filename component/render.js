import Image from 'next/image'

export default function Render({title, date, img, link}) {

    return (
      <div className='flex flex-col w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10'>
        <a target="_blank" href={link} rel="noreferrer" className='hover:opacity-60'>
          <Image src={img} height={500} width={500} layout={"intrinsic"} alt={title}/>
        </a>
        <div className='text-gray-800'>
          <span className='font-semibold'>{title}</span>
          <span className='text-sm'> - {date}</span>
        </div>
      </div>
    )
}