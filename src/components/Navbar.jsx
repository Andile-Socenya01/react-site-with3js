import React from 'react'
import { styled } from 'styled-components'

const Section = styled.div `
display: flex;
justify-content: center;
width: 100%;

`

const Container = styled.div`
top:10%;
width:1200px;

display: flex;
justify-content: space-between;
align-items:center;
padding:10px 0px;
`

const Links = styled.div`
display: flex;
align-items: center;
gap:50px;



`;


const Logo = styled.img`

height:50px;

`;
const List = styled.ul`
display:flex;
gap:20px;
list-style:none;

@media only screen and (max-width:768px) {

  display:none;
}

`;
const ListItem = styled.li`
cursor:pointer;

`;


const Icons = styled.div`

display: flex;
align-items: center;
gap:20px;

`;


const Icon = styled.img`
width:20px;
cursor:pointer;
@media only screen and (max-width:768px) {

  display:none;
}
`;
const Button = styled.button`

width:100px;
padding: 10px;
background-color:#da4ea2;
color:white;
border:none;
border-radius:5px;
cursor: pointer;

`;

const Navbar = () => {
  return ( 
    <Section>

        <Container> 
            <Links>
            <Logo src="./img/Andile 2.png"/>
            <List>
                <ListItem>Home </ListItem>
                <ListItem>Studio </ListItem>
                <ListItem>Works </ListItem>
                <ListItem>home </ListItem>
            </List>
            </Links>
            <Icons> 
                <Icon src="./img/search.png"/>
                <Button>Hire Now</Button>
            </Icons>
            
            
         </Container>
    </Section>
  )
}

export default Navbar