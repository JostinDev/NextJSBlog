import Image from 'next/image'

export default function Project({title, description, date, img, link}) {

    return (
      <div className='flex  flex-col w-full md:w-1/3 px-4 mb-10'>
        <a className={'w-full h-48 relative'} target="_blank" href={link} rel="noreferrer">
          <Image src={img} fill={true} style={{objectFit:"cover"}} alt={title} className='rounded'/>
        </a>
        <p className='mt-2 text-gray-500 text-sm'>{date}</p>
          <a target="_blank" href={link} rel="noreferrer">
              <p className='inline-block cursor-pointer text-lg font-semibold py-1 text-white'>
                  {title}
              </p>
          </a>
        <p className='text-gray-500'>{description}</p>
      </div>
    )
}