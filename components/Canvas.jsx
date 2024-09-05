"use client";

import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Scroll, ScrollControls } from "@react-three/drei";
import Cube from "../components/Cube";
import Interface from "../components/Interface";
import { useState } from "react";
import ScrollManager from "../components/ScrollManager";
import Menu from "../components/Menu";
import ToolBox from "../components/ToolBox";

export default function Canvas_Com() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <Canvas>
        <directionalLight position={[2, 1, 1]} />
        <ambientLight />
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          {/* Motion Config Defines a animation type for all child components */}
          <Scroll>
            <MotionConfig
              transition={{
                type: "spring",
                mass: 5,
                stiffness: 500,
                damping: 50,
                restDelta: 0.0001,
              }}
            >
              <Cube section={section} />
              <ToolBox section={section} position={[0, 0, 0]} scale={5} />
            </MotionConfig>
          </Scroll>
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
    </>
  );
}
