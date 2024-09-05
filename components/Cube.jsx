"use client";

import { motion } from "framer-motion-3d";

import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function Cube() {
  const cubeRef = useRef(null);

  useFrame((state, delta) => {
    cubeRef.current.rotation.x += delta / 2;
    cubeRef.current.rotation.y += delta / 2;
    cubeRef.current.rotation.z += delta / 2;
  });

  const texture_1 = useLoader(TextureLoader, "/obsidian.jpeg");

  return (
    <motion.mesh
      //   initial={{ opacity: 0 }}
      //   whileInView={{
      //     opacity: 1,
      //     transition: {
      //       duration: 1,
      //       delay: 0.5,
      //     },
      //   }}
      ref={cubeRef}
      position={[0, 0, 0]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture_1} />
    </motion.mesh>
  );
}
