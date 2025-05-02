'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import CELLS from 'vanta/dist/vanta.cells.min';

type BackgroundProps = {
  color1: number;
  color2: number;
  backgroundColor: number;
  scale: number;
}

export default function Background ({ color1, color2, backgroundColor, scale }: BackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);


  useEffect(() => {
    if (!vantaEffect && typeof window !== 'undefined') {
      setVantaEffect(
        CELLS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: scale,
          scaleMobile: 1.0,
          backgroundColor: backgroundColor,
          color1: color1,
          color2: color2,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  useEffect(() => {
    if (vantaEffect) {
      vantaEffect.setOptions({
        color1,
        color2,
        backgroundColor,
        scale,
      });
    }
  }, [color1, color2, backgroundColor, scale, vantaEffect]);

  return <div ref={vantaRef} style={backgroundStyle} className="relative w-full" />;
};

const backgroundStyle: React.CSSProperties = {
  //h-screen
  height: "100dvh"
}