import * as THREE from 'three'
import {useEffect} from "react";
import Head from "next/head";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import Link from 'next/link'

export default function Custom404() {

  let camera, scene, renderer;
  let sizes
  let mixerGhost
  let previousTime = 0
  const clock = new THREE.Clock()
  let ghost


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
      height: 400
    }

    resize()

    camera = new THREE.PerspectiveCamera( 70, sizes.width / sizes.height, 0.01, 10 );
    camera.position.z = 4;
    camera.position.y = -0.5;


    scene = new THREE.Scene();

    // Create the light the three.js elements
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
    scene.add(ambientLight)
    const light = new THREE.PointLight( 0xb63cfc, 2, 5 );
    light.position.set( 2, 2, 3 );
    scene.add( light );


    const gltfLoader = new GLTFLoader()
    gltfLoader.load(
      '/models/404.glb',
      (gltf) => {
        mixerGhost = new THREE.AnimationMixer(gltf.scene)
        gltf.scene.traverse((child) => {
          if(child.name === "Cylinder") {
            child.scale.set(1.3, 1.3, 1.3)
            child.position.x = 0.6
          }
          if(child.name === "Cube") {
            child.scale.set (1.3,1.3,1.3)
            child.position.z = -0.6
          }

        })
        const action0 = mixerGhost.clipAction(gltf.animations[0])
        action0.play()
        const action1 = mixerGhost.clipAction(gltf.animations[1])
        action1.play()
        const action2 = mixerGhost.clipAction(gltf.animations[2])
        action2.play()
        scene.position.z = -1
        gltf.scene.rotation.y = Math.PI
        ghost = gltf.scene
        scene.add(gltf.scene)
      }
    )

    const canvas = document.getElementById("notFound");

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

    if(mixerGhost)
      mixerGhost.update(deltaTime * 0.75)

    renderer.render( scene, camera );

  }
  return (
    <div className='container mx-auto px-4 lg:px-30 xl:px-48'>
      <Head>
        <title>404</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-center mt-10'>
        <p className='text-gray-800 text-5xl font-semibold'>Oh no!</p>
        <p className='text-2xl text-gray-700'> Ghosty stoled the page you were looking for.</p>
        <p className='inline-block cursor-pointer text-lg font-semibold py-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-300 hover:via-pink-400 hover:to-red-400'>
          <Link href='/' passHref>
            Go Back Home
          </Link>
        </p>
      </div>
      <canvas id='notFound' className='mx-auto rounded mt-14'/>
    </div>
  )
}