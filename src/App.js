// import { Route, Routes, NavLink } from "react-router-dom";
import './App.scss';
import React, { Suspense, useEffect, useRef, useState, useTransition } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { AccumulativeShadows, CycleRaycast, Environment, Html, Loader, MeshWobbleMaterial, OrbitControls, Outlines, RandomizedLight, Sky, Text, Text3D, useTexture } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useControls } from 'leva'
import { useTrail, a } from '@react-spring/web';
import { useSpring, animated } from "@react-spring/three";
import { Color } from 'three';

import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'

import trailstyles from './trailstyles.module.css';
import { lerp } from 'three/src/math/MathUtils';

function Env() {
  const [preset, setPreset] = useState('dawn')
  const [inTransition, startTransition] = useTransition()

  useEffect(() => {
    const setEnvPreset = () => {
      const now = new Date();
      const hours = now.getHours();
  
      if(hours >= 5 && hours <= 10){
        startTransition(() => setPreset('dawn'))
      }
      if(hours > 10 && hours <= 18){
        startTransition(() => setPreset('warehouse'))
      }
      if(hours > 18 && hours <= 20){
        startTransition(() => setPreset('sunset'))
      }
      if(hours > 20 && hours < 6){
        startTransition(() => setPreset('night'))
      }

    }

    setEnvPreset()

  }, []);

  return <Environment preset={preset} background blur={1} />
}

function InteractiveBox({ sceneInFocus, setSceneInFocus, sceneOpen }) {

  // https://coolors.co/palette/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529
  const box_side_colors = {
    0: '#ced4da',
    1: '#adb5bd',
    2: '#6c757d',
    3: '#495057',
    4: '#343a40',
    5: '#212529'
  }

  useEffect(() => {
    // console.log('Scene status: ' + sceneOpen);
    if(sceneOpen){
      setIsWireframeMode(true)
      // mainGroup.current.position.y = -2;
    }
    else {
      setIsWireframeMode(false)
      // mesh.current.position.y = 0;
    } 
  }, [sceneOpen])

  const [isWireframeMode, setIsWireframeMode] = useState(false) 

  const mesh = useRef(null)
  const mainGroup = useRef(null)
  const [hovered, setHovered] = useState(null)
  // const springs = useSpring({ color: box_side_colors[hovered + 1] });

  const degree_to_rad = (degrees) => {
    return 2 * Math.PI * (degrees / 360) / 2;
  }

  const setDefaultColor = (index) => {
    return box_side_colors[index]
  }

  const resetBoxColors = () => {
    setHovered(null)
    for (let i = 0; i < mesh.current.material.length; i++) {
      mesh.current.material[i].color = new Color(mesh.current.material[i].defaultColor)
    }
  }

  // IMPLEMENT https://codesandbox.io/s/react-spring-forked-6qgre?file=/src/App.js:260-329
  const get_side_color_on_hover = (index) => {   
    if(index == hovered){
      return '#ffffff'
    } else {
      return box_side_colors[index]
    }
  }

  const handleBoxClick = (event) => {
    // console.clear()
    // console.log(event.face.materialIndex)
    setSceneInFocus(event.face.materialIndex)

    switch (event.face.materialIndex) {
      case 0:
        // do something 
        break;

      case 1:
        // do something 
        break;

      case 2:
        // do something 
        break;

      case 3:
        // do something 
        break;

      case 4:
        // do something 
        break;
    
      case 5:
        // do something 
        break;
    
      default:
        break;
    }
  }

  useFrame(({ clock, mouse }) => {
    mesh.current.rotation.x = clock.getElapsedTime() * 0.1;
    mesh.current.rotation.y = lerp(
      mesh.current.rotation.y,
      Math.PI,
      0.05
    );
    mesh.current.rotation.z = clock.getElapsedTime() * 0.4;
  });

  return (
    <group ref={mainGroup}>
      <mesh scale={0.2}>
        <icosahedronGeometry />
        <MeshWobbleMaterial 
          color={0x000} 
          wireframe={false}
          factor={5} speed={1}
          />
      </mesh>
      <mesh scale={0.4}>
        <icosahedronGeometry />
        <MeshWobbleMaterial 
          color={0x000} 
          wireframe={true}
          factor={3} speed={2}
          />
      </mesh>
      <mesh
        ref={mesh}
        castShadow
        scale={1}
        onClick={handleBoxClick}
        onPointerOut={resetBoxColors}
        onPointerMove={(e) => setHovered(e.face.materialIndex)}>

          {[...Array(6)].map((_, index) => (
            <meshStandardMaterial 
              transparent={true}
              opacity={0.9} 
              wireframe={isWireframeMode} 
              attach={`material-${index}`} 
              key={index} 
              defaultColor={setDefaultColor(index)}
              color={get_side_color_on_hover(index)}
              metalness={1} roughness={0}
            ></meshStandardMaterial>
          ))}

          <boxGeometry/>
         
      </mesh>
    </group>
    
  )
}

const TextTrail = ({ open, children }) => {

  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  const TrailElement = ({ index, item, style, height }) => {

    if(item.type === 'span'){
      return (
        <a.div key={index} className={trailstyles.trailsText} style={style}>
          <a.div style={{ height }} key={index + 'span'}>{item}</a.div>
        </a.div>
      )
    }
    if(item.type === 'div'){
      return (
        <a.div className={trailstyles.regularTextWrapper} key={index} style={style}>
          {item}
        </a.div>
      )
    }
    if(item.type === 'a'){
      return item;
    }
    if(item.type === 'br'){
      return item;
    }
   
  }

  // <a.div key={index} className={trailstyles.trailsText} style={style}>
  //   <a.div style={{ height }}>{items[index]}</a.div>
  // </a.div>

  return (
    <div className={trailstyles.container}>
      {trail.map(({ height, ...style }, index) => (
        <TrailElement index={index} item={items[index]} style={style} height={height} />
      ))}
    </div>
  )
}

function App() {
  const [open, setOpen] = useState(false)
  const [sceneInFocus, setSceneInFocus] = useState(null)
  const [sceneOpen, setSceneOpen] = useState(false)

  const [hidden, set] = useState()

  useEffect(() => {
    // console.log('U focus: ' + sceneInFocus);

    if(sceneInFocus !== null){
      setOpen(true)
      setSceneOpen(true)
    }
  }, [sceneInFocus, sceneOpen])

  return (
    <>
      <Canvas camera={{ position: [2, 1, 5], fov: 30 }}>

        <Suspense fallback={null}>

          <group position={[0, 0.01, 0]}>
            <InteractiveBox sceneInFocus={sceneInFocus} setSceneInFocus={setSceneInFocus} sceneOpen={sceneOpen}/>

            <AccumulativeShadows temporal frames={200} color="purple" colorBlend={0.5} opacity={1} scale={10} alphaTest={0.85}>
              <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 3, 2]} bias={0.001} />
            </AccumulativeShadows>
          </group>

          <group position={[0, 0, 0]}>
            <Html
              fullscreen
              center
              onOcclude={setOpen}
              style={{
                // top: '0',
                // left: '0',
                transition: 'all 0.5s',
                opacity: !open ? 0 : 1,
                display: !open ? 'none' : 'flex',
                transform: `scale(${!open ? 0.5 : 1})`
              }}
              >
              <TextTrail open={open}>
                <span>Hi.</span>
                <span>I'm Zulfo,</span>
                <span>Full Stack Web Developer</span>
                <br className='breakPoint'/>
                <div className={trailstyles.regularText}>Tech stack:</div>
                <div className={trailstyles.smallText}>Laravel (PHP), Vue.js, MySQL.</div>
                <br className='breakPoint'/>
                <div className={trailstyles.regularText}>Experience:</div>
                <div className={trailstyles.smallText}>Since <strong>2019.</strong></div>
                <br className='breakPoint'/>
                <div className={trailstyles.regularText}>Hobbies:</div>
                <div className={trailstyles.smallText}>Hiking, Cycling, Gaming, Music.</div>
                <br className='breakPoint'/>
                <div className={trailstyles.regularText}>Contact:</div>
                <a className={trailstyles.linkToMail} href='mailto:zmuhovic97@gmail.com' target='_blank' rel='noopener'>Send me a mail</a>
              </TextTrail>

            </Html>

          </group>

          <OrbitControls makeDefault enableDamping={false} enablePan={false} enableZoom={false} />

          <Env />

        </Suspense>

        <EffectComposer>
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={1} height={480} />
          <Bloom luminanceThreshold={0} luminanceSmoothing={1} height={300} />
          <Noise opacity={0.01} />
          <Vignette eskil={false} offset={0.01} darkness={0.5} />
        </EffectComposer>

      </Canvas>

      <Loader 
        dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} // Text
      />
    </>
    
  )
}

export default App;
