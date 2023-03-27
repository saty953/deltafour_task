import React from "react";
import styled from "styled-components";
import Lg from "./logo.jpeg";
import Header from "./Components/Header";
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 0.2;
  background-color: #0e2539;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;
const Logo = styled.div`
margin-top:10px;
border-radius:50%;
overflow:hidden;
object-fit:contain;
cursor:pointer;
height:106px;
`;
const ElementD = styled.div`
margin:15px;
position: relative;
width:90%;
height: 48px;
background: #1F3F5C;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
display:flex;
align-items: center;
justify-content:center;
cursor:pointer;
`;
const Element= styled.div`
position: relative;
width:90%;
height: 48px;
left: 5px;
color:white;
display:flex;
align-items: center;
justify-content:center;
cursor:pointer;
`;

const Right = styled.div`
  flex: 0.8;
  background-color: #fcfcfc;
`;

function App() {
  return (
    <Container>
      <Left>
        <Logo>
    <img src={Lg}></img>
        </Logo>
        <ElementD>Dashboard</ElementD>
          <Element>Work Permits</Element>
          <Element>Areas</Element>
          <Element>Pojects</Element>
          <Element>Users</Element>
          <Element>Reports</Element>
          <Element>Profile</Element>
      </Left>
      <Right><Header/></Right>
    </Container>
  );
}

export default App;
