import Head from 'next/head'
import Post from "../component/post";
import { getSortedPostsData } from '../component/posts'
import {useState} from "react";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
export default function Blog({ allPostsData }) {

  const[start,setStart] = useState(0)
  const[elementToDisplay,setElementToDisplay] = useState(4)
  const[page,setPage] = useState(1)

  function previous () {
    if(!(start < elementToDisplay)) {
      setStart(start-elementToDisplay)
      setPage(page-1)
    }
  }
  function next() {
    if(!((elementToDisplay * page) >= allPostsData.length)) {
      setStart(start+elementToDisplay)
      setPage(page+1)
    }
  }

  return (
    <div className='container mx-auto px-4 lg:px-30 xl:px-48'>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p className='my-10 text-6xl font-medium text-gray-800'>The Blog</p>
          {/* Add this <section> tag below the existing <section> tag */}
        <div>
          {allPostsData.slice(start,start+elementToDisplay).map(({ id, date, title, img },index) => (
            <Post key={id} img={img} id={id} date={date} title={title} isFirstPost={index === 0 && page === 1}/>
          ))}
        </div>

        <div className='mx-auto text-center text-lg font-semibold py-10 text-white'>
          <p className='p-2 rounded cursor-pointer inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-300 hover:via-pink-400 hover:to-red-400' onClick={()=>previous()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Prev</p>
          <p className='p-2 rounded inline-block mx-10 md:mx-40 text-gray-800'>{page} / {Math.ceil(allPostsData.length / elementToDisplay)}</p>
          <p className='p-2 rounded cursor-pointer inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-300 hover:via-pink-400 hover:to-red-400' onClick={()=>next()}>Next
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </p>
        </div>
      </div>
    </div>
  )
}
