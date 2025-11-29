"use client"
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Models } from './Models'

export default function Scene() {
    return (
        <div className="w-full h-screen">
            <Canvas gl={{ toneMappingExposure: 1.5 }} shadows>
                <Environment preset="city"  />
                <color attach="background" args={["#eae7f0"]} />
                {/* <ambientLight intensity={1.5} /> */}
             
                <Models position={[0, 0, 0]} scale={0.2} src={'/models/meiaaliancagab.glb'}/>

                <OrbitControls />
            </Canvas>
        </div>
    )
}
