import styled from "styled-components";



export const Item =styled.li`
    list-style: none;
    padding: 10px;
   width: 200px;
   overflow: hidden;
    background-color: #6161e9e2;

    border-radius: 8px;

&:hover{
  transform: scale(1.1);
}

`
export const Text =styled.p`
    margin-right: 10px;
    color: #fcf8f8fd;

`
export const Button = styled.button`

   background-color: #fcf8f8fd;
   border: none;
   padding: 4px;
   cursor: pointer;
   border-radius: 8px;

   &:hover{   
    background-color: #4fbbd3;


   }

`

export const BtnWrap=styled.div`
    display: flex;  
    justify-content: space-evenly;
    
`
export const Box=styled.div`
    display: flex;  
align-items: center;
`
export const SvgWrap = styled.span`
margin-left: 5px;
`