// import { Route, Routes, NavLink } from "react-router-dom";
import './App.scss';
import { Suspense, useState } from 'react'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { Html, MeshWobbleMaterial, OrbitControls, Outlines, Sky, useTexture } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

function Box() {
  const [size, set] = useState(0.5)
  const controls = useThree((state) => state.controls)

  const degree_to_rad = (degrees) => {
    return 2 * Math.PI * (degrees / 360) / 2;
  }

  // https://docs.pmnd.rs/react-three-fiber/tutorials/loading-textures

  const textureProps = useTexture({
    map: 'textures/Metal/Metal027_1K-JPG_Color.jpg',
    displacementMap: 'textures/Metal/Metal027_1K-JPG_Displacement.jpg',
    normalMap:'textures/Metal/Metal027_1K-JPG_NormalGL.jpg',
    roughnessMap: 'textures/Metal/Metal027_1K-JPG_Roughness.jpg',
    // aoMap: 'textures/Metal/Metal027_1K-JPG_Color.jpg',
  })

  return (
    <>
      <mesh scale={0.4}>
        <icosahedronGeometry />
        <MeshWobbleMaterial color={0x000} wireframe={true}/>
      </mesh>
      <mesh scale={size * 2}>
        <boxGeometry/>
        <meshStandardMaterial wireframe={true} {...textureProps} displacementScale={0.01} displacementBias={0.01} />
        <Outlines thickness={0.05} color="#eee" />
        <Html occlude distanceFactor={1.5} position={[0, 0, 0.51]} transform center>
          <div style={{display: 'flex', flexDirection: 'column', userSelect: 'none', backgroundColor: "#212121", padding: '12px 6px'}}>
            <span style={{color: '#eee'}}>Hi, I'm Zulfo.</span>
            <span style={{color: '#eee'}}>Full Stack Web Developer.</span>
          </div>
        </Html>
        <Html occlude distanceFactor={1.5} position={[0.51, 0, 0]} rotation={[0, degree_to_rad(180), 0]} transform center>
          <div style={{display: 'flex', flexDirection: 'column', userSelect: 'none', backgroundColor: "#212121", padding: '12px 6px'}}>
            <span style={{color: '#eee'}}>Tech Stack:</span>
            <span style={{color: '#eee'}}>Laravel (PHP), Vue.js, MySQL.</span>
          </div>
        </Html>
        <Html occlude distanceFactor={1.5} position={[0, 0.51, 0]} rotation={[degree_to_rad(-180), 0, 0]} transform center>
          <div style={{display: 'flex', flexDirection: 'column', userSelect: 'none', backgroundColor: "#212121", padding: '12px 6px'}}>
            <span style={{color: '#eee', textAlign: 'center'}}>Hobbies:</span>
            <span style={{color: '#eee'}}>Hiking, Cycling, Gaming,</span>
            <span style={{color: '#eee', textAlign: 'center'}}>Music</span>
          </div>
        </Html>
        <Html occlude distanceFactor={1.5} position={[-0.51, 0, 0]} rotation={[0, degree_to_rad(-180), 0]} transform center>
          <div style={{display: 'flex', flexDirection: 'column', userSelect: 'none', backgroundColor: "#212121", padding: '12px 6px'}}>
            <span style={{color: '#eee', textAlign: 'center'}}>Experience:</span>
            <span style={{color: '#eee'}}>Since <strong>2019.</strong></span>
          </div>
        </Html>
        <Html occlude distanceFactor={1.5} position={[0, 0, -0.51]} rotation={[0, degree_to_rad(-360), 0]} transform center>
          <div style={{display: 'flex', flexDirection: 'column', userSelect: 'none', backgroundColor: "#212121", padding: '12px 6px'}}>
            <span style={{color: '#eee', textAlign: 'center'}}>Contact:</span>
            <a style={{color: '#212121', textDecoration: 'none', background: '#eee', padding: '4px 8px', borderRadius: '8px', marginTop: '8px'}} href='mailto:zmuhovic97@gmail.com' target='_blank'>Send me a mail</a>
          </div>
        </Html>
      </mesh>
    </>
    
  )
}

function App() {
  return (
    <Canvas camera={{ position: [2, 1, 5], fov: 30 }}>
      <Suspense fallback={null}>
        <Sky distance={450000} sunPosition={[0, 5, 0]} rayleigh={3} elevation={2} inclination={0} azimuth={180} />
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 2, 5]} />
        <pointLight position={[-2, -2, -5]} />
        <Box />
      <OrbitControls makeDefault />
      </Suspense>
    </Canvas>
  )
}

export default App;
