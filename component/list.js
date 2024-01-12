import Image from 'next/image'
import ListItem from "./listItem";
import Link from "next/link";

export default function List({items, title, seeMoreLink, itemsNumber}) {

    return (
        <div>
          <h1 className='text-xl text-white mb-2'>{title}</h1>
          <ul className='flex flex-col gap-2'>
                {items.slice(0,itemsNumber).map(({ title, date, link }, index) => (
                    <ListItem key={index} title={title} link={link}></ListItem>
                ))}
            </ul>
          <Link href={seeMoreLink} className='text-md text-gray-500 mt-2 block hover:text-gray-300 transition'>See more...</Link>
        </div>
    )
}