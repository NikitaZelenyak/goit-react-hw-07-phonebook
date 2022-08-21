import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav =styled.nav`
    display: flex;
    flex-direction: column;
    border-right: 1px solid black;
`
export const Wrap = styled.div`

  display: grid;
  grid-template-columns: 120px 1fr;
`


export const Link = styled(NavLink)`
display: flex;
align-items: center;
justify-content: space-between;
width: 86px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: #0444f4;
  }
  :hover:not(.active){
    background-color: #0e49eb90;
     color: white;
  }
`;

export const Title = styled.h1`
  color: white;
  text-align: center;
`