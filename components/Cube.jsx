"use client";

import { motion } from "framer-motion-3d";
import { useMotionValue } from "framer-motion";
import { OrbitControls } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function Cube({ section }) {
  const cubeRef = useRef(null);

  useFrame((state, delta) => {
    cubeRef.current.rotation.x += delta / 2;
    cubeRef.current.rotation.y += delta / 2;
    cubeRef.current.rotation.z += delta / 2;
  });

  const texture_1 = useLoader(TextureLoader, "/obsidian.jpeg");

  return (
    <motion.mesh
      animate={{
        y: section === 0 ? 0 : 2,
        // x: section === 0 ? 0 : -1,
        // z: section === 0 ? 0 : -1,
        scale: section != 0 ? 0.5 : 1,
      }}
      ref={cubeRef}
      position={[0, 0, 0]}
    >
      {/* <OrbitControls enablePan={false} enableZoom={false} /> */}
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial map={texture_1} />
    </motion.mesh>
  );
}
