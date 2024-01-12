import Image from 'next/image'

export default function ListItem({title, link}) {

    return (
        <li className='text-md text-gray-500 '>
            <a className={'hover:text-gray-300 transition'} target={"_blank"} href={link}>
                {title}
            </a>
        </li>
    )
}