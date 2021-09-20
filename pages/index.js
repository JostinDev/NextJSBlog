import Head from 'next/head'
import Image from "next/image"
import Link from "next/link"
import * as THREE from "three"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import {useEffect} from "react"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader"
import { useStores } from '../hooks/use-stores'


export default function Home() {

  const { navStore } = useStores()

  let camera, scene, renderer, controls;
  let sizes
  const roomGroup = new THREE.Group()

  useEffect(() => {
    init();
    //Update the sizes when the screen is resized. If it's not done, the size of the simulation is fixed
    window.addEventListener('resize', () => {

      resize()

      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })
  },[]);

  function resize() {

    try {
      sizes.width = container.clientWidth

      if(container.clientWidth > 1000)
        sizes.height = 1000
      else
        sizes.height = container.clientWidth
    } catch {}
  }

  function init() {

    const container = document.getElementById('container');

    sizes = {
      width: container.clientWidth,
      height: 800
    }

    resize()

    camera = new THREE.PerspectiveCamera( 50, sizes.width / sizes.height, 0.01, 50 );
    camera.position.x = 18;
    camera.position.y = 8;
    camera.position.z = -13;

    scene = new THREE.Scene();

    // Create the light the three.js elements
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
    scene.add(ambientLight)
    const light = new THREE.PointLight( 0xb63cfc, 2, 5 );
    light.position.set( 2, 2, 3 );
    scene.add( light );

    // Load the world and the animals
    const textureLoader = new THREE.TextureLoader()

    const wallsLoaded = textureLoader.load('textures/Walls.jpg')
    wallsLoaded.flipY = false
    wallsLoaded.encoding = THREE.sRGBEncoding
    const wallsTexture = new THREE.MeshBasicMaterial({map: wallsLoaded})

    const shelfLoaded = textureLoader.load('textures/Shelf.jpg')
    shelfLoaded.flipY = false
    shelfLoaded.encoding = THREE.sRGBEncoding
    const shelfTexture = new THREE.MeshBasicMaterial({map: shelfLoaded})

    const deskLoaded = textureLoader.load('textures/Desk.jpg')
    deskLoaded.flipY = false
    deskLoaded.encoding = THREE.sRGBEncoding
    const deskTexture = new THREE.MeshBasicMaterial({map: deskLoaded})

    const decorationLoaded = textureLoader.load('textures/Decoration.jpg')
    decorationLoaded.flipY = false
    decorationLoaded.encoding = THREE.sRGBEncoding
    const decorationTexture = new THREE.MeshBasicMaterial({map: decorationLoaded})

    const livingRoomLoaded = textureLoader.load('textures/LivingRoom.jpg')
    livingRoomLoaded.flipY = false
    livingRoomLoaded.encoding = THREE.sRGBEncoding
    const livingRoomTexture = new THREE.MeshBasicMaterial({map: livingRoomLoaded})

    const sofaLoaded = textureLoader.load('textures/Sofa.jpg')
    sofaLoaded.flipY = false
    sofaLoaded.encoding = THREE.sRGBEncoding
    const sofaTexture = new THREE.MeshBasicMaterial({map: sofaLoaded})

    const gltfLoader = new GLTFLoader()
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath( '/draco/' );
    dracoLoader.preload();

    gltfLoader.setDRACOLoader(dracoLoader)

    gltfLoader.load(
      'models/draco/walls.glb',
      (gltf) => {
        gltf.scene.traverse((child) => {
          child.material = wallsTexture
        })
        roomGroup.add(gltf.scene)
      }
    )

    gltfLoader.load(
      'models/draco/shelf.glb',
      (gltf) => {
        gltf.scene.traverse((child) => {
          child.material = shelfTexture
        })
        roomGroup.add(gltf.scene)
      }
    )

    gltfLoader.load(
      'models/draco/desk.glb',
      (gltf) => {
        gltf.scene.traverse((child) => {
          child.material = deskTexture
        })
        roomGroup.add(gltf.scene)
      }
    )

    gltfLoader.load(
      'models/draco/decoration.glb',
      (gltf) => {
        gltf.scene.traverse((child) => {
          child.material = decorationTexture
        })
        roomGroup.add(gltf.scene)
      }
    )

    gltfLoader.load(
      'models/draco/livingRoom.glb',
      (gltf) => {
        gltf.scene.traverse((child) => {
          child.material = livingRoomTexture
        })
        roomGroup.add(gltf.scene)
      }
    )

    gltfLoader.load(
      'models/draco/sofa.glb',
      (gltf) => {
        gltf.scene.traverse((child) => {
          child.material = sofaTexture
        })
        roomGroup.add(gltf.scene)
      }
    )

    scene.add(roomGroup)
    roomGroup.position.y = -3

    const canvas = document.getElementById("room");

    // Create the controls
    controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.rotateSpeed *= 0.4
    controls.enableZoom = false
    controls.enablePan = false
    controls.maxAzimuthAngle = -2.9
    controls.minAzimuthAngle = 1.4
    controls.maxPolarAngle = 1.4
    controls.minPolarAngle = 0.5

    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true
    })

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.setClearColor( 0x000000, 0 ); // the default
    renderer.setAnimationLoop( animation );
  }

  function animation() {
    controls.update()
    renderer.render( scene, camera );
  }

  return (
    <div className='container mx-auto' id='container'>
      <Head>
        <title>Justin Nydegger</title>
        <meta name="description" content="Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className='flex flex-row mt-10 px-4'>
          <div className='w-full md:w-3/5'>
            <p className='text-4xl md:text-6xl text-gray-800'>Hello! I Am</p>
            <p className='text-4xl md:text-6xl font-semibold py-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>Justin Nydegger</p>
            <p className='text-gray-700 mt-5 text-justify'>
              I am a swiss software engineer who seeks to create beautiful web experiences. I am a passionate learner
              and a hard worker. I consider myself as a determined person. I always try to improve myself and other
              people’s lives by creating tools such as
              <span className='cursor-pointer font-semibold p-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-300 hover:via-pink-400 hover:to-red-400'>
                <a target='_blank' rel='noreferrer' href='https://embrave.app/'>Embrave</a>
              </span>. My free time is fully dedicated to trying out and learning new skills.
              As a very curious person, travelling the world is one of my biggest dreams.</p>
            <p className='text-gray-600 mt-3 text-justify'>
              Currently learning
              <span className='cursor-pointer font-semibold p-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-300 hover:via-pink-400 hover:to-red-400'>
                <a target='_blank' rel='noreferrer' href='https://www.blender.org/'>Blender</a>
              </span>
              and
              <span className='cursor-pointer font-semibold p-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-300 hover:via-pink-400 hover:to-red-400'>
                <a target='_blank' rel='noreferrer' href='https://threejs.org/'>Three.js</a>
              </span>
            </p>
            <Link href='/projects' passHref>
              <p onClick={()=>navStore.routerPath('/projects')} className='py-3 px-4 mt-5 rounded text-white font-semibold cursor-pointer inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-300 hover:via-pink-400 hover:to-red-400'>
               See my projects
              </p>
            </Link>
          </div>
          <div className='w-0 md:w-2/5 md:pl-5 md:align-middle lg:w-1/2 invisible md:visible text-center'>
            <Image src='/images/home/profile2.png' height={450} width={450} layout={"intrinsic"} alt={'Profile Picture'}/>
          </div>

        </div>
      </div>
      <p className='text-2xl md:text-3xl mb-10 font-semibold text-gray-600 mt-10 text-center mx-auto'>Discover more about me</p>
      <div>
        <div className='flex flex-wrap px-4 mx-auto text-gray-700'>
          <div className='w-full md:w-2/5 px-2 mb-3'>
            <p className='text-2xl font-semibold py-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
              Education
            </p>
            <p>Master of Science HES-SO en Integrated Innovation for Product and Business Development (2021 - 2023)</p>
            <p>Bachelor in Computer science and communication systems (2018 - 2021)</p>
            <p>Federal Certificate of Vocational Education and Training (2013 - 2017)</p>
          </div>
          <div className='w-full md:w-2/5 px-2 mb-3'>
            <p className='text-2xl font-semibold py-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
              Professional experience
            </p>
            <p>Application developer for Geodis - Dublin (2018 - 7 months)</p>
            <p>Freelancer (2013 - now)</p>
            <p>Apprentice application developer for HEAI - Switzerland  (2013 - 2017)</p>
          </div>
          <div className='w-full md:w-1/5 px-2 mb-3'>
            <p className='text-2xl font-semibold py-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
              Languages
            </p>
            <p>French - mother tongue</p>
            <p>English - C1</p>
            <p>Spanish - B2</p>
            <p>German - B2</p>
          </div>
          <div className='w-full md:w-1/5 px-2 mb-3'>
            <p className='text-2xl font-semibold py-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
              Hobbies
            </p>
            <p>Sport, Coding, Cooking, Learning, Traveling, Video editing, Video games</p>
          </div>
        </div>
        <p className='text-2xl md:text-3xl mb-4 font-semibold text-gray-600 mt-10 text-center mx-auto'>This is my room</p>
        <p className='text-gray-500 text-sm text-center mx-auto'>Drag & drop to explore it. The objects express what I like</p>
        <canvas id='room' className='mx-auto'/>
      </div>
    </div>
  )
}
