import Layout from '../../component/layout'
import { getAllPostIds, getPostData } from '../../component/posts'
import Markdown from 'markdown-to-jsx';

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
            <div className='container mx-auto max-w-screen-lg pt-10 px-4'>
                <h1 className='text-6xl'>{postData.title}</h1>
                <p className='text-gray-600 pt-4'>{postData.date}</p>
                <Markdown className='markdown pt-10 text-justify'>{postData.content}</Markdown>
            </div>

        </Layout>
    )
}