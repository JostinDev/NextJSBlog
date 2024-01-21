import Image from 'next/image'

export default function ListItem({title, link}) {

    return (
        <li className='text-md text-gray-400 '>
            <a className={'hover:text-gray-200 transition'} target={"_blank"} href={link}>
                {title}
            </a>
        </li>
    )
}