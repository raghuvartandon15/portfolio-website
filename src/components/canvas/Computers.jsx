import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene, materials, error } = useGLTF("./desktop_pc/scene.gltf");

  useEffect(() => {
    if (error) {
      console.error("Error loading GLTF model:", error);
    } else {
      console.log("GLTF model loaded successfully:", scene);
      
      // Adjust material properties for brightness
      if (materials) {
        Object.values(materials).forEach((material) => {
          // material.emissive = material.color.clone(); // Set the emissive color to match the base color
          material.emissiveIntensity = 2; // Adjust the intensity as needed
          material.color.multiplyScalar(1.2); // Increase brightness by multiplying the color
        });
      }
    }
  }, [error, scene, materials]);

  if (!scene) {
    return null;
  }

  return (
    <primitive
      object={scene}
      scale={isMobile ? 0.7 : 0.75}
      position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
    />
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={1.5} />
        <Computers isMobile={false} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
