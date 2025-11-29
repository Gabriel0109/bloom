"use client"
import { useGLTF } from '@react-three/drei'
import { useLayoutEffect } from 'react'
import { Mesh } from 'three'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Models(props: any) {
    const { scene } = useGLTF(`${props.src}`)
    useLayoutEffect(() => {
        scene.traverse((o) => {
            
    
        
            if (o instanceof Mesh && (o.name.includes('Gem') || o.material.name.includes('Gem'))) {
                if (o.isMesh && (o.name.includes('Gem') || o.material.name.includes('Gem'))) {
                    o.material.transmission = .6
                    o.material.roughness = 0
                    o.material.metalness = 0
                    o.material.ior = 2.42
                    o.material.thickness = 0.5
                    o.material.color.set('#ffffff')
                    o.material.envMapIntensity = 2
              }  }
        })
    }, [scene])
    return <primitive object={scene} {...props} />
}
