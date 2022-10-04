import styled from "styled-components"

export const Container = styled.div`
background-color: yellow;
height: 50vh;
width: 50vw;
position: fixed;
z-index: 1;
margin: 80px auto;
opacity: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: black;
font-size: 30px;
`

export const InputContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
gap: 24px; 
`