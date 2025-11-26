"use client"
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { RobotModel } from './Models'

export default function Scene() {
    return (
        <div className="w-full h-screen">
            <Canvas gl={{ toneMappingExposure: 1.5 }} shadows>
                <Environment preset="city"  />
                <color attach="background" args={["#eae7f0"]} />
                {/* <ambientLight intensity={1.5} /> */}
             
                <RobotModel position={[0, 0, 0]} scale={0.2} />

                <OrbitControls />
            </Canvas>
        </div>
    )
}
