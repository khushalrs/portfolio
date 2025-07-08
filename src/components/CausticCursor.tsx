'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// @ts-ignore
import HALO from 'vanta/dist/vanta.halo.min';

const VantaHaloBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          baseColor: 0xff3cac,
          backgroundColor: 0xc9e2f5,
          amplitudeFactor: 2.5,
          xOffset: 0,
          size: 1.5,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full z-[-1]" />;
};

export default VantaHaloBackground;
