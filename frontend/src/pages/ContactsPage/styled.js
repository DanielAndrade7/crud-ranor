import styled from "styled-components"

export const Container = styled.div`
background-color: black;
color: white;
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
align-items: center;

> p {
    color: white;
    font-size: 40px;
}
`

export const TextContainer = styled.div`
height: 16vh;
display: flex;
align-items: center;
justify-content: center;
font-size: 60px;
`

export const ContactListContainer = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
width: 65vw;
height: 65vh;
align-items: center;
overflow: auto;
background-color: gray;
opacity: 80%;
border: 2px solid white;
`

export const ContactContainer = styled.div`
display: flex;
color: white;
border: 2px solid white;
width: 90%;
height: 15%;
align-items: center;
justify-content: space-around;
font-size: 20px;
`

export const GoBackButton = styled.button`
width: 16vw;
margin-top: 40px;
background-color: red;
color: white;
border: 2px solid white;
border-radius: 4px;
padding: 8px;
cursor: pointer;
:hover {
    opacity: 75%;
    border: 2px solid gold;
}
`

export const EditAndDeleteButton = styled.button`
width: 10%;
cursor: pointer;
border-radius: 4px;
padding: 10px;
background-color: white;
border: 2px solid red;
font-size: 16px;
:hover { 
    padding: 15px;
}
`