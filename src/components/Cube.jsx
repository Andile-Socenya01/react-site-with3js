import React, { useRef } from 'react'
import { OrbitControls, PerspectiveCamera, RenderTexture,Text } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

import { styled } from 'styled-components'
import { BoxGeometry, Mesh } from 'three';

const Cube = () => {
    const textRef = useRef()
    useFrame(state=> (textRef.current.position.x= Math.sin(state.clock.elapsedTime)*2))
  return (
    <mesh>
            <boxGeometry /> 
            <meshStandardMaterial>
              <RenderTexture attach="map">
                <PerspectiveCamera makeDefault position={[0,0,5]} />

                <color attach ="background" args={["#9300ff"]}/>
                <Text ref={textRef} fontsize={5} color="white">
                  Hello 
                </Text>
              </RenderTexture>
             
              
            </meshStandardMaterial>   
        </mesh>
  )
}

export default Cube