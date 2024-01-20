import Image from 'next/image'
import ListItem from "./listItem";
import Link from "next/link";
import arrow from "../public/arrow.svg";

export default function List({items, title, seeMoreLink, itemsNumber}) {

    return (
        <div>
          <h1 className='text-xl text-white mb-2'>{title}</h1>
          <ul className='flex flex-col gap-2'>
                {items.slice(0,itemsNumber).map(({ title, date, link }, index) => (
                    <ListItem key={index} title={title} link={link}></ListItem>
                ))}
            </ul>
          <Link href={seeMoreLink} className='flex gap-2 font-mono text-md text-gray-500 mt-2 hover:text-gray-300 transition'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
            See more...
          </Link>
        </div>
    )
}