import {styled} from "styled-components"

export const Wrapper = styled.div`
width: 20rem;
height: 30rem;
box-shadow: 0 0.4rem 0.4rem 0 #00000040;
position: relative;
`

export const Img = styled.img`
width: 20rem;
height: 22rem;
object-fit: cover;
`

export const Name = styled.p`
font-size: 1.6rem;
font-weight: 300;
margin-top: 1rem;
`


export const Button = styled.button`
width: 20rem;
background-color: #d4b447;
color: #ffff;
border: #d4b447;
height: 3rem;
cursor: pointer;
position: absolute;
bottom: 0;

&:hover{
        background-color: #000000;  
}
`
