import React from 'react'

import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Chair from './Chair'
import Pc from './Pc'
import Space from './Space'
import House from './House'
import WebDev from './WebDev'
import Scope from './Scope'
import House2 from './House2'
import Bob from './Bob'
import Boxes from './Boxes'
import Phone from './Phone'

const ProductDesign = () => {
  return (
    <Canvas>
    <OrbitControls enableZoom={false}  autoRotate autoRotateSpeed={5}/>
    
    <ambientLight intensity={2}>
        <directionalLight position={[3,2,1]}/>
      </ambientLight>

    {/* <Stage environment="city" intensity={0.6}/> */}
    {/* <Chair enableZoom={false}  scale={5}/> */}
    {/* <Space enableZoom={false}  scale={0.5}/> */}
    {/* <WebDev enableZoom={false}  scale={0.3}/> */}
    {/* <House enableZoom={false}  scale={0.2}/> */}
    {/* <House2 enableZoom={false}  scale={0.002}/> */}
    {/* <Bob enableZoom={false}  scale={1}/> */}
    {/* <Boxes enableZoom={false}  scale={100}/> */}
    <Scope enableZoom={false}  scale={1}/>

    {/* <Phone enableZoom={false}  scale={1}/> */}
  </Canvas> 
  
  )
}

export default ProductDesign