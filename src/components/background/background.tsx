'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import CELLS from 'vanta/dist/vanta.cells.min';

type VantaEffect = {
  destroy: () => void;
  [key: string]: unknown;
};

export default function Background () {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect>();


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
          scale: 1,
          scaleMobile: 1.0,
          backgroundColor: 0x111111,
          color1: 0x000000,
          color2: 0xffffff,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} style={backgroundStyle} className="relative w-full" />;
};

const backgroundStyle: React.CSSProperties = {
  //h-screen
  height: "100dvh"
}