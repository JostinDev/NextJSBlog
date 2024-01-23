import Head from 'next/head'
import justin from '../public/justin.png'
import justinSquare from '../public/justinSquare.png'
import projects from "../data/projectData";
import renders from "../data/renderData";
import List from "../component/list";
import Image from "next/image";

export default function Home() {

	return (
			<div className='flex flex-col lg:flex-row gap-6 xl:gap-10'>
				<Head>
					<title>Justin Nydegger</title>
					<meta name="description" content="Personal Website"/>
					<link rel="icon" href="/favicon.ico"/>
				</Head>

				<div className='hidden lg:block md:w-[400px] xl:w-[500px] rounded-l-2xl rounded-r-sm w-full h-full bg-center bg-no-repeat bg-cover p-8'
						 style={{backgroundImage: `url(${justin.src})`}}>
					<p className='hidden lg:block text-white text-4xl'>Justin Nydegger</p>
				</div>

				<div className='flex lg:hidden flex-col sm:flex-row gap-4'>
					<Image className='rounded-full' src={justinSquare} width={200} alt={''}></Image>
					<div className='flex flex-col flex-1 min-w-0 gap-2'>
						<p className='lg:hidden text-white text-4xl'>Justin Nydegger</p>
						<div className='flex gap-1 flex-col ml-2'>
							<p className='text-md text-gray-400'>
								Software engineer
							</p>
							<p className='text-md text-gray-400'>
								Indie Hacker
							</p>
							<p className='text-md text-gray-400'>
								3D enthusiast
							</p>
						</div>
					</div>
				</div>

				<div className='flex flex-col flex-1 lg:pr-4 flex-wrap'>
					<div className='flex flex-col md:flex-row flex-1 justify-between pt-10 gap-6 flex-wrap'>

						<div className='flex flex-col md:flex-1 min-w-0'>
							<h1 className='text-xl text-white'>About me</h1>
							<p className='text-md text-gray-400 mt-2'>
								I am a passionate software engineer from Switzerland who seeks to create beautiful web experiences.
							</p>
							<p className='text-md text-gray-400 mt-2'>
								I love creating stuff, I&apos;ve developed Embrave.
							</p>
							<p className='text-md text-gray-400 mt-2'>
								My free time is fully dedicated to trying out and learning new skills.
							</p>
							<p className='text-md text-gray-400 mt-2'>
								As a very curious person, travelling the world is one of my biggest dreams.
							</p>
						</div>
						<div className='flex flex-col md:flex-1 min-w-0 gap-2'>
							<h1 className='text-xl text-white'>Education</h1>
							<ul className='flex flex-col gap-2'>
								<li className='text-md font-bold text-gray-400'>Bachelor in Computer science <span className='block text-sm font-medium font-mono'>[2018 - 2021]</span></li>
								<li className='text-md font-bold text-gray-400'>Apprenticeship in software development <span className='block text-sm font-medium font-mono'>[2013 - 2017]</span></li>
							</ul>
						</div>

						<div className='flex flex-col md:flex-1 min-w-0 gap-2'>
							<h1 className='text-xl text-white'>Professional experience</h1>
							<ul className='flex flex-col gap-2'>
								<li className='text-md font-bold text-gray-400'>Software engineer at Adnovum <span className='block text-sm font-medium font-mono'>[2021 - present]</span></li>
								<li className='text-md font-bold text-gray-400'>Application developer at Geodis - Dublin <span className='block text-sm font-medium font-mono'>[2018 - 7 months]</span></li>
								<li className='text-md font-bold text-gray-400'>Indie Hacker <span className='block text-sm font-medium font-mono'>[2013 - now]</span></li>
								<li className='text-md font-bold text-gray-400'>Apprentice application developer for HEAI <span className='block text-sm font-medium font-mono'>[2013 - 2017]</span>
								</li>
							</ul>
						</div>

					</div>
					<div className='flex flex-col md:flex-row flex-1 justify-between pt-10 gap-6 flex-wrap'>
						<div className='flex flex-col md:flex-1 min-w-0'>
							<List itemsNumber={8} seeMoreLink={'/projects'} title={'Projects'} items={projects.data}></List>
						</div>
						<div className='flex flex-col md:flex-1 min-w-0'>
							<List itemsNumber={8} seeMoreLink={'/renders'} title={'Renders'} items={renders.data}></List>
						</div>

						<div className='hidden md:flex flex-col md:flex-1 min-w-0 gap-2'>
							<h1 className='text-xl text-white'>Contact me</h1>
							<a target={'_blank'} href={'https://x.com/LeJostin'}
								 className='text-md text-gray-400 hover:text-gray-300 transition'>x.com</a>
							<a target={'_blank'} href={'https://www.instagram.com/justinnydegger/'}
								 className='text-md text-gray-400 hover:text-gray-300 transition'>instagram.com</a>
							<a href={"mailto:justin@nydegger.me"}
								 className='text-md w-min	block text-white hover:text-gray-300 transition rounded-2xl mt-6 py-4 px-6 bg-[#295EC4]'>justin@nydegger.me</a>
						</div>
					</div>
				</div>
			</div>
	)
}
