"use client";

import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import Cube from "../components/Cube";
import Interface from "../components/Interface";
import { useState } from "react";
import ScrollManager from "../components/ScrollManager";

export default function Canvas_Com() {
  const [section, setSection] = useState(0);

  return (
    <>
      <Canvas>
        <directionalLight position={[2, 1, 1]} />
        <ambientLight />
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Cube />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}
