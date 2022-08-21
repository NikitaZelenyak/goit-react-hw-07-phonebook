import styled from "styled-components";


import {  NavLink } from "react-router-dom";

export const Container = styled.div`
height: 100vh;
  overflow: hidden;
background: rgb(9,187,218);
background: linear-gradient(90deg, rgba(9,187,218,1) 0%, rgba(14,152,232,1) 29%, rgba(11,106,222,1) 100%);
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;


  > nav {
    display: flex;
  }
`;

export const Nav = styled.nav`
margin-left: auto;
margin-right: auto;
`



export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  color: white;
  &.active {
    color: white;
    background-color: #0444f4;
  }
  :hover:not(.active){
    background-color: #0eebe490;
     color: white;
  }
`;
    

export const Text = styled.p`
font-size: 36px;
  margin: 0;
color: white;
`