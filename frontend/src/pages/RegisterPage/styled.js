import styled from "styled-components"

export const Container = styled.div`
background-color: rgb(175, 35, 28);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
`

export const TitleContainer = styled.p`
color: rgb(175, 35, 28);
font-size: 30px;
margin-bottom: 16px;
font-weight: bold;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const RegisterContainer = styled.div`
color: white;
border: 1px solid white;
height: 50vh;
width: 25vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
background-color: #FFF;
border-radius: 20px;
padding: 50px;
`

export const InputContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
gap: 24px; 
width: 100%;
`

export const SendButton = styled.button`
width: 100%;
cursor: pointer;
border-radius: 4px;
padding: 10px;
background-color: red;
color: white;
border: 2px solid white;
font-size: 16px;
border-radius: 10px;
font-weight: bold;
:hover { 
  opacity: 80%;
}
`

export const GoBackButton = styled.button`
width: 300px;
margin-top: 40px;
background-color: #FFF;
color: rgb(175, 35, 28);
border: 2px solid white;
border-radius: 4px;
padding: 15px 30px;
font-size: 25px;
cursor: pointer;
:hover {
  font-weight: bold;
  transition: font-size 0.5s;
}
`

export const Input = styled.input`
border: none;
border-radius: 10px;
width: 100%;
height: 40px;
background-color: #d4d4d4;
padding-left: 20px;
`

export const Wrapper = styled.div`
width: 100%;
`

export const Label = styled.div`
color: rgb(175, 35, 28);
font-weight: bold;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`