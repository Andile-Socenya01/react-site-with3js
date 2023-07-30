import Hero from "./components/Hero"
import Works from "./components/Works"
import Who from "./components/who"
import Contact from "./components/Contact"
import Test from "./components/Test"
import { styled } from "styled-components"
import React from 'react'
import { OrbitControls, PerspectiveCamera, RenderTexture,Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';


import { BoxGeometry, Mesh } from 'three';


const Container = styled.div `

height : 100vh;
width:100%;
scroll-snap-type : y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color:white;
background: url("./img/bg.jpg");
&:: -webkit-scrollbar{
  display:none;
}
`


function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
      {/* <Test/> */}
    </Container>
  )
}

export default App
