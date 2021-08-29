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
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <br />

            <Markdown>{postData.content}</Markdown>

        </Layout>
    )
}