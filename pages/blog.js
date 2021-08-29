import Head from 'next/head'
import Image from 'next/image'

export default function Blog() {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p className='my-4 font-bold h-2'>Blog</p>
      </div>
    </div>
  )
}
