import Head from 'next/head'
import just1test2 from '../public/just1test2.png'
import projects from "../data/projectData";
import renders from "../data/renderData";
import List from "../component/list";

export default function Home() {

	return (
			<div className='flex gap-10'>
				<Head>
					<title>Justin Nydegger</title>
					<meta name="description" content="Personal Website"/>
					<link rel="icon" href="/favicon.ico"/>
				</Head>
				<div className='w-[500px] rounded-l-2xl rounded-r-sm bg-center bg-no-repeat bg-cover p-8'
						 style={{backgroundImage: `url(${just1test2.src})`}}>
					<p className='text-white text-4xl'>Justin Nydegger</p>
				</div>
				<div className='flex flex-col flex-1 pr-4'>
					<div className='flex flex-1 justify-between pt-10 gap-6'>

						<div className='flex flex-col flex-1 min-w-0'>
							<h1 className='text-xl text-white'>About me</h1>
							<p className='text-md text-gray-500 mt-2'>
								I am a passionate software engineer from Switzerland who seeks to create beautiful web experiences.
							</p>
							<p className='text-md text-gray-500 mt-2'>
								I love creating stuff, I've developed Embrave.
							</p>
							<p className='text-md text-gray-500 mt-2'>
								My free time is fully dedicated to trying out and learning new skills.
							</p>
							<p className='text-md text-gray-500 mt-2'>
								As a very curious person, travelling the world is one of my biggest dreams.
							</p>
						</div>
						<div className='flex flex-col flex-1 min-w-0 gap-2'>
							<h1 className='text-xl text-white'>Education</h1>
							<ul className='flex flex-col gap-2'>
								<li className='text-md text-gray-500'>Bachelor in Computer science (2018 - 2021)</li>
								<li className='text-md text-gray-500'>Apprenticeship in software development (2013 - 2017)</li>
							</ul>
						</div>

						<div className='flex flex-col flex-1 min-w-0 gap-2'>
							<h1 className='text-xl text-white'>Professional experience</h1>
							<ul className='flex flex-col gap-2'>
								<li className='text-md text-gray-500'>Software engineer at Adnovum (December 2021 - now)</li>
								<li className='text-md text-gray-500'>Application developer at Geodis - Dublin (2018 - 7 months)</li>
								<li className='text-md text-gray-500'>Freelancer (2013 - now)</li>
								<li className='text-md text-gray-500'>Apprentice application developer for HEAI - Switzerland (2013 -
									2017)
								</li>
							</ul>
						</div>

					</div>
					<div className='flex flex-1 justify-between pt-10 gap-6'>
						<div className='flex flex-col flex-1 min-w-0'>
							<List itemsNumber={8} seeMoreLink={'/projects'} title={'Projects'} items={projects.data}></List>
						</div>
						<div className='flex flex-col flex-1 min-w-0'>
							<List itemsNumber={8} seeMoreLink={'/renders'} title={'Renders'} items={renders.data}></List>
						</div>

						<div className='flex flex-col flex-1 min-w-0 gap-2'>
							<h1 className='text-xl text-white'>Contact me</h1>
							<a target={'_blank'} href={'https://x.com/LeJostin'}
								 className='text-md text-gray-500 hover:text-gray-300 transition'>x.com</a>
							<a target={'_blank'} href={'https://www.instagram.com/justinnydegger/'}
								 className='text-md text-gray-500 hover:text-gray-300 transition'>instagram.com</a>
							<a href={"mailto:justin@nydegger.me"}
								 className='text-md w-min	block text-white hover:text-gray-300 transition rounded-full p-4 bg-[#295EC4]'>justin@nydegger.me</a>
						</div>

					</div>
				</div>
			</div>
	)
}
