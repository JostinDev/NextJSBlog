import Image from 'next/image'

export default function Project({title, description, date, img, link}) {

    return (
      <div className='flex flex-col w-full md:w-1/3 px-4 mb-10'>
        <a target="_blank" href={link} rel="noreferrer">
          <Image src={img} height={1080} width={1920} layout={"intrinsic"} alt={title} className='rounded'/>
        </a>
        <p className='mt-2 text-gray-500 text-sm'>{date}</p>
          <a target="_blank" href={link} rel="noreferrer">
              <p className='inline-block cursor-pointer text-lg font-semibold py-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-300 hover:via-pink-400 hover:to-red-400'>
                  {title}
              </p>
          </a>
        <p className='text-gray-800'>{description}</p>
      </div>
    )
}