import Head from 'next/head'
import justin from '../public/justin.jpg'
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

				<div className='hidden lg:block md:w-[400px] 2xl:w-[500px] rounded-l-2xl rounded-r-sm w-full h-full bg-center bg-no-repeat bg-cover p-8'
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
								I am a Swiss software engineer passionate about building fast, user-centric web experiences that make an impact.							</p>
							<p className='text-md text-gray-400 mt-2'>
								I thrive in dynamic environments where curiosity, rapid learning, and creative problem-solving drive innovation.							</p>
							<p className='text-md text-gray-400 mt-2'>
								Curious by nature, I enjoy discovering new horizons through travel and deeply value human connection.							</p>
						</div>

							<div className='flex flex-col md:flex-1 min-w-0'>
								<List itemsNumber={8} seeMoreLink={'/projects'} title={'Projects'} items={projects.data}></List>
							</div>
							<div className='flex flex-col md:flex-1 min-w-0'>
								<List itemsNumber={8} seeMoreLink={'/renders'} title={'My art'} items={renders.data}></List>
							</div>

					</div>
					<div className='flex flex-col md:flex-row flex-1 justify-between pt-10 gap-6 flex-wrap'>
						
						<div className='flex flex-col md:flex-1 min-w-0 gap-2'>
								<h1 className='text-xl text-white'>Education</h1>
								<ul className='flex flex-col gap-2'>
									<li className='text-md font-bold text-gray-400'>PADI Rescue Diver <span className='block text-sm font-medium font-mono'>[2025]</span></li>
									<li className='text-md font-bold text-gray-400'>Cantonal certificate for company instructors <span className='block text-sm font-medium font-mono'>[2023]</span></li>
									<li className='text-md font-bold text-gray-400'>Bachelor in Computer science <span className='block text-sm font-medium font-mono'>[2018 - 2021]</span></li>
									<li className='text-md font-bold text-gray-400'>Apprenticeship in software development <span className='block text-sm font-medium font-mono'>[2013 - 2017]</span></li>
								</ul>
							</div>

							<div className='flex flex-col md:flex-1 min-w-0 gap-2'>
								<h1 className='text-xl text-white'>Professional experience</h1>
								<ul className='flex flex-col gap-2'>
									<li className='text-md font-bold text-gray-400'>Software engineer - Team Lead at Adnovum <span className='block text-sm font-medium font-mono'>[2021 - 2024]</span></li>
									<li className='text-md font-bold text-gray-400'>Application developer at Geodis - Dublin <span className='block text-sm font-medium font-mono'>[2018 - 7 months]</span></li>
									<li className='text-md font-bold text-gray-400'>Indie Hacker <span className='block text-sm font-medium font-mono'>[2013 - now]</span></li>
									<li className='text-md font-bold text-gray-400'>Apprentice application developer at HEAI <span className='block text-sm font-medium font-mono'>[2013 - 2017]</span>
									</li>
								</ul>
							</div>

						<div className='md:flex flex-col md:flex-1 min-w-0 gap-2'>
							<h1 className='text-xl text-white'>Contact me</h1>
							<a href={"mailto:justin@nydegger.me"}
								 className='text-md w-min block text-white hover:text-gray-300 transition rounded-2xl mt-1 py-4 px-6 bg-[#334d3f]'>justin@nydegger.me</a>
						</div>
					</div>
				</div>
			</div>
	)
}
