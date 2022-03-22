import * as THREE from "three";
import { Plane, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useEffect, useState } from "react";

const Scene = (props) => {

  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState("");
  
  useEffect(() => {
    if(quote !== "") { console.log(quote); return;}
    fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then((res) => res.json())
    .then(
      (data) => {

        let quotes = data.quotes;
        let len = Object.keys(quotes).length;
        let selection = quotes[Math.floor(Math.random() * len)];

        let selected_quote = selection.quote;
        let selected_author = selection.author;
        
        setQuote({selection});

      },
      (error) => {
        console.log(error)
      }
    );
  })


  return (
    <div className="canvas__wrapper">
      <Canvas>
        <Text position={[0, 1, -20]} fontSize={0.5} color="black" letterSpacing={1.2} >work in progress</Text>
        <Text position={[0, -1, -20]} fontSize={0.4} color="black" letterSpacing={0.2} >{quote ? quote.selection.quote : ''}</Text>
        <Text position={[0, -1.7, -20]} fontSize={0.3} color="black" letterSpacing={0.3} >{quote ? quote.selection.author : ''}</Text>
        
        <Plane 
        position={[0, 5, -8]}
        rotation={[Math.PI / 2, 0, 0]}
        args={[100, 80, 128, 128]}>
          <meshStandardMaterial wireframe side={THREE.DoubleSide} />
        </Plane>

        <Plane 
        position={[0, -5, -8]}
        rotation={[Math.PI / 2, 0, 0]}
        args={[100, 80, 128, 128]}>
          <meshStandardMaterial wireframe side={THREE.DoubleSide} />
        </Plane>

        <EffectComposer>
          <Bloom
            luminanceThreshold={0.3}
            luminanceSmoothing={0.9}
            height={1024}
          />
        </EffectComposer>

      </Canvas>
    </div>
  )

}

export default Scene;