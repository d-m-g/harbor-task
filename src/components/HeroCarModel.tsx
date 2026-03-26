import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import type { Group } from "three";
import { publicUrl } from "../utils/publicUrl";

function CarMesh() {
  const group = useRef<Group>(null);
  const targetRotation = useRef(0);
  const gltf = useGLTF(publicUrl("2020_skoda_kamiq_gt.glb"));

  useEffect(() => {
    const onScroll = () => {
      targetRotation.current = window.scrollY * 0.00125;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y +=
        (targetRotation.current - group.current.rotation.y) * 0.1;
    }
  });

  return (
    <group ref={group} position={[-0.1, -2, -0.9]} scale={150}>
      <primitive object={gltf.scene} />
    </group>
  );
}

useGLTF.preload(publicUrl("2020_skoda_kamiq_gt.glb"));

export function HeroCarModel() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-xl shadow-2xl">
      <Canvas camera={{ position: [25, 6.8, 25], fov: 34 }}>
        <color attach="background" args={["#f2efee"]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[8, 8, 5]} intensity={1.8} />
        <Suspense fallback={null}>
          <CarMesh />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
