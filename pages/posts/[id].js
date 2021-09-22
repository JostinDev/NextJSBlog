import Layout from '../../component/layout'
import { getAllPostIds, getPostData } from '../../component/posts'
import Markdown from 'markdown-to-jsx';
import Link from "next/link";

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {
    return (
        <Layout>
            <div className='container mx-auto max-w-screen-lg pt-5 pb-10 px-4 md:px-20'>
                <div className='md:absolute block md:-ml-16 ml-0 my-2'>
                    <Link href={'/blog'} passHref>
                        <p className='p-2 cursor-pointer w-max rounded-full text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-300 hover:via-pink-400 hover:to-red-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                        </p>
                    </Link>
                </div>
                <h1 className='text-6xl'>{postData.title}</h1>
                <p className='text-gray-600 pt-4'>{postData.date}</p>
                <Markdown className='markdown pt-10 text-justify'>{postData.content}</Markdown>
            </div>

        </Layout>
    )
}