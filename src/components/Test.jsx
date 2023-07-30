import { OrbitControls, PerspectiveCamera, RenderTexture,Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import { styled } from 'styled-components'
import { BoxGeometry, Mesh } from 'three';
import Cube from './Cube';
import Pc  from './Pc'
import Chair from './Chair'
import Space from './Space'
import Planet from './Planet'


const Container = styled.div`

height: 100vh;
width: 100%;
scroll-snap-align: center;

`;


const test = () => {
  return (
    <Container>

    <Canvas>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={10}/>
        <ambientLight intensity={2}>
          <directionalLight position={[3,2,1]}/>
        </ambientLight>
        {/* <Chair/> */}
        {/* <Space/> */}
        {/* <Cube/> */}

        <Planet/>
        
    </Canvas>

    </Container>
  )
}

export default test