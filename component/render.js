import Image from 'next/image'

export default function Render({title, date, img, link}) {

    return (
      <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10'>
        <a target="_blank" href={link} rel="noreferrer" className='hover:opacity-60'>
          <Image className='rounded' src={img} height={500} width={500} layout={"intrinsic"} alt={title}/>
        </a>
        <div>
          <p className='mt-2 text-gray-400 text-sm font-mono'>{date}</p>
          <p className='inline-block cursor-pointer text-lg font-semibold py-1 text-white'>
            {title}
          </p>
        </div>
      </div>
    )
}