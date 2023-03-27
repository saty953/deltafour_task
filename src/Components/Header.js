import React from "react";
import styled from "styled-components";
import Lg from "../logo.jpeg";
import Graph from "./Graph";
import Calendar from "./Calender";
import PieChart from "./PieChart";
import SmallPieChart from "./SmallPieChart";
const Container = styled.div`
 widht:100%;
 height:80px;
 display flex;
justify-content:space-around;
 align-items:center;
//  border-bottom:1px solid black;
 `;
const Input = styled.input`
  position: relative;
  width: 30%;
  height: 40px;
  background: #e3ebf7;
  border-radius: 8px;
  border: none;
  :hover {
    border: 1px solid black;
  }
`;
const Middle = styled.div`
  position: relative;
  width: 25%;
  height: 40px;
  background: #e3ebf7;
  display flex;
  border-radius:4px;
  justify-content:center;
   align-items:center;
   font-size:13px;
   cursor:pointer;
   :hover{
    border:1px solid black;
  }
`;
const MID = styled.div`
display flex;
justify-content:space-around;
 align-items:center;
 width:30%;
//  border:1px solid green;
cursor:pointer;
`;
const Profile = styled.div`
display flex;
justify-content:space-around;
align-items:center;
left:0px;
position:relative;
height:60px;
width:30%;
background-color:#E3EBF7;
border: 1px solid rgba(14, 37, 57, 0.3);
cursor:pointer;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 30px;

color: #666666;
:hover{
    border:2px solid pink;
  }
`;
const Maincontainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  display: flex;
  flex: 0.3;
  height: 88vh;
 
  flex-direction: column;
`;
const RCoontent = styled.div`
// padding-top:20px;
padding-bottom:-30px !important;
  display: flex;
  justify-content: space-around;
  align-items:center;
  flex: 0.2;
  background: white;
//   border: 1px solid red;
`;
const RBCoontent = styled.div`
  display: flex;
  flex: 0.4;
  background: white;
//   border: 1px solid red;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.7;
  height: 88vh;
`;
const Lcontent = styled.div`
align-items:center;
justify-content:center;
  display: flex;
  flex: 0.5;
  border: 1px solid white;
  border-radius: 15px;
  margin: 15px;
`;

function Header() {
  return (
    <>
      <div>
        <Container>
          <Input></Input>
          <MID>
            {" "}
            <Middle>Unit Name</Middle>
            <Middle>Project Site</Middle>
            <Middle>Time frame</Middle>
          </MID>

          <Profile>
            <img src={Lg} style={{ height: "25px" }}></img>{" "}
            <span>Hello Satyam</span>
          </Profile>
        </Container>
      </div>
      <Maincontainer>
        <Right>
          <RCoontent>
          <PieChart />
          <PieChart />
          <PieChart />
          </RCoontent>
          <RBCoontent>
            <Graph />
          </RBCoontent>
        </Right>
        <Left>
          <Lcontent>
            <Calendar />
          </Lcontent>
          <Lcontent>
            <SmallPieChart />
          </Lcontent>
        </Left>
      </Maincontainer>
    </>
  );
}
export default Header;
