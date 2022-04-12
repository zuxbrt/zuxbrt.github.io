import * as React from 'react';
import { Canvas } from "@react-three/fiber";
import { Plane, Stars } from "@react-three/drei";

const Scene = (props) => {

  return (
    <div className="canvas__wrapper">
      <Canvas>
        <Stars/>
        <Plane rotation-x={Math.PI / 2} args={[100, 100, 4 ,4]}>
          <meshBasicMaterial color="black"/>
        </Plane>
      </Canvas>
    </div>
  )

}

export default Scene;