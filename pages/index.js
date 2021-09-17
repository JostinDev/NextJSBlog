import Head from 'next/head'
import Image from "next/image"
import Link from "next/link";
import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {useEffect} from "react";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"


export default function Home() {

  let camera, scene, renderer, controls;
  let sizes
  let previousTime = 0
  const clock = new THREE.Clock()

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
    if(window.innerWidth <= 300) {
      // Update sizes
      sizes.width = 150
      sizes.height = 150
    } else if(window.innerWidth <= 400) {
      // Update sizes
      sizes.width = 250
      sizes.height = 250
    } else if(window.innerWidth <= 700) {
      // Update sizes
      sizes.width = 300
      sizes.height = 300
    } else if(window.innerWidth <= 900) {
      // Update sizes
      sizes.width = 600
      sizes.height = 300
    } else if(window.innerWidth <= 900) {
      // Update sizes
      sizes.width = 800
      sizes.height = 400
    }
  }


  function init() {
    sizes = {
      width: 800,
      height: 800
    }

    resize()

    camera = new THREE.PerspectiveCamera( 50, sizes.width / sizes.height, 0.01, 50 );
    camera.position.x = 20;
    camera.position.y = 10;
    camera.position.z = -15;

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

    gltfLoader.load(
      'models/walls.glb',
      (gltf) => {
        gltf.scene.traverse((child) => {
          child.material = wallsTexture
        })
        scene.add(gltf.scene)
      }
    )

    gltfLoader.load(
      'models/shelf.glb',
      (gltf) => {
        gltf.scene.traverse((child) => {
          child.material = shelfTexture
        })
        scene.add(gltf.scene)
      }
    )

    gltfLoader.load(
      'models/desk.glb',
      (gltf) => {
        gltf.scene.traverse((child) => {
          child.material = deskTexture
        })
        scene.add(gltf.scene)
      }
    )

    gltfLoader.load(
      'models/decoration.glb',
      (gltf) => {
        gltf.scene.traverse((child) => {
          child.material = decorationTexture
        })
        scene.add(gltf.scene)
      }
    )

    gltfLoader.load(
      'models/livingRoom.glb',
      (gltf) => {
        gltf.scene.traverse((child) => {
          child.material = livingRoomTexture
        })
        scene.add(gltf.scene)
      }
    )

    gltfLoader.load(
      'models/sofa.glb',
      (gltf) => {
        gltf.scene.traverse((child) => {
          child.material = sofaTexture
        })
        scene.add(gltf.scene)
      }
    )

    const canvas = document.getElementById("room");

    // Create the controls
    controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.rotateSpeed *= -0.5;

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

    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    controls.update()

    renderer.render( scene, camera );

  }

  return (
    <div className='container mx-auto'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className='flex flex-row mt-20'>
          <div className='w-1/2'>
            <p className='text-6xl text-gray-800'>Hello! I Am</p>
            <p className='text-6xl font-semibold py-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>Justin Nydegger</p>
            <p className='text-gray-600 mt-5 text-justify'>
              I am a swiss software engineer who seeks to create beautiful web experiences. I am a passionate learner
              and a hard worker. I consider myself as a determined person. I always try to improve myself and other
              people’s lives by creating tools such as
              <span className='cursor-pointer font-semibold p-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-300 hover:via-pink-400 hover:to-red-400'>
                <a target='_blank' rel='noreferrer' href='https://embrave.app/'>Embrave</a>
              </span>. My free time is fully dedicated to trying out and learning new skills.
              My hobbies are : programming, sports, skiing, learning and video editing. As a very
              curious person, travelling the world is one of my biggest dreams.</p>
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
              <p className='py-3 px-4 mt-5 rounded text-white font-semibold cursor-pointer inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-300 hover:via-pink-400 hover:to-red-400'>
               See my projects
              </p>
            </Link>
          </div>
          <div className='w-1/2 text-center'>
            <Image src='/images/home/profile2.png' height={450} width={450} layout={"intrinsic"} alt={'Profile Picture'}/>
          </div>

        </div>
      </div>
      <p className='text-2xl font-semibold text-gray-600 mt-10 text-center mx-auto'>Discover more about me</p>

      <div className='flex flex-row'>
        <div className='w-1/2'>
          <p>Hey</p>
        </div>
        <canvas id='room' className='mx-auto w-1/2'/>
      </div>
    </div>
  )
}
