// import { Route, Routes, NavLink } from "react-router-dom";
import './App.scss';
import React, { Suspense, useEffect, useRef, useState, useTransition } from 'react'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { AccumulativeShadows, CycleRaycast, Environment, Html, Loader, MeshWobbleMaterial, OrbitControls, Outlines, RandomizedLight, Sky, Text, useTexture } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useControls } from 'leva'
import { useTrail, a } from '@react-spring/web';
import { useSpring, animated } from "@react-spring/three";
import { Color } from 'three';

import trailstyles from './trailstyles.module.css';

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

function InteractiveBox() {
  const mesh = useRef(null)
  const [hovered, setHovered] = useState(null)

  const degree_to_rad = (degrees) => {
    return 2 * Math.PI * (degrees / 360) / 2;
  }

  // https://coolors.co/palette/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529
  const box_side_colors = {
    0: '#ced4da',
    1: '#adb5bd',
    2: '#6c757d',
    3: '#495057',
    4: '#343a40',
    5: '#212529'
  }

  // https://docs.pmnd.rs/react-three-fiber/tutorials/loading-textures

  const textureProps = useTexture({
    // map: 'textures/Metal/Metal027_1K-JPG_Color.jpg',
    // displacementMap: 'textures/Metal/Metal027_1K-JPG_Displacement.jpg',
    // normalMap:'textures/Metal/Metal027_1K-JPG_NormalGL.jpg',
    // roughnessMap: 'textures/Metal/Metal027_1K-JPG_Roughness.jpg',
    // aoMap: 'textures/Metal/Metal027_1K-JPG_Color.jpg',
  })

  const setDefaultColor = (index) => {
    return box_side_colors[index]
  }

  const resetBoxColors = () => {
    setHovered(null)
    for (let i = 0; i < mesh.current.material.length; i++) {
      console.log(mesh.current.material[i].defaultColor)
      mesh.current.material[i].color = new Color(mesh.current.material[i].defaultColor)
    }
  }

  // IMPLEMENT https://codesandbox.io/s/react-spring-forked-6qgre?file=/src/App.js:260-329
  const get_side_color_on_hover = (index) => {   
    if(index == hovered){
      return '#ef233c'
    } else {
      return box_side_colors[index]
    }
  }

  const handleBoxClick = (event) => {
    console.clear()
    console.log(event.face.materialIndex)
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

  return (
    <>
      <mesh scale={0.2}>
        <icosahedronGeometry />
        <MeshWobbleMaterial 
          color={0x000} 
          wireframe={true}
          factor={5} speed={1}
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
              wireframe={false} 
              attach={`material-${index}`} 
              key={index} 
              defaultColor={setDefaultColor(index)}
              color={get_side_color_on_hover(index)} 
              metalness={0} roughness={1}
            ></meshStandardMaterial>
          ))}

          <boxGeometry/>
         
      </mesh>
    </>
    
  )
}

const IntroTextTrail = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={trailstyles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Canvas camera={{ position: [2, 1, 5], fov: 30 }}>

        <Suspense fallback={null}>

          <group position={[0, 0.01, 0]}>
            <InteractiveBox/>

            <AccumulativeShadows temporal frames={200} color="purple" colorBlend={0.5} opacity={1} scale={10} alphaTest={0.85}>
              <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 3, 2]} bias={0.001} />
            </AccumulativeShadows>
          </group>

          {/* <group position={[0, 0.01, 0]}>
            <Html as='div' className={trailstyles.container} onClick={() => setOpen(state => !state)}>
              <IntroTextTrail open={open}>
                <span>Hi</span>
                <span>I'm</span>
                <span>Zulfo,</span>
                <span>Full Stack Web Developer</span>
              </IntroTextTrail>
            </Html>
          </group> */}

          <OrbitControls makeDefault enableDamping={false} enablePan={false} enableZoom={false} />

          <Env />

        </Suspense>

      </Canvas>

      <Loader 
        dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} // Text
      />
    </>
    
  )
}

export default App;
