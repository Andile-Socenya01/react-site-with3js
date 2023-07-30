/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 chair.gltf --transform
Author: MaX3Dd (https://sketchfab.com/MaX3Dd)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/old-wooden-chair-3f95ffdc194047ada2d9391828a5d234
Title: Old Wooden Chair
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/chair-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group scale={47.99}>
          <mesh geometry={nodes.chair_chair_0.geometry} material={materials.chair} position={[0, 0, 0.04]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/chair-transformed.glb')