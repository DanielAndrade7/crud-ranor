import styled from "styled-components"

export const Container = styled.div`
position: fixed;
z-index: 1;
color: rgb(175, 35, 28);
font-size: 30px;
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
margin: auto;
left: 37.5%;
top: 10%;
box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
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

export const InputContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
gap: 24px; 
width: 100%;
`

export const TitleContainer = styled.p`
color: rgb(175, 35, 28);
font-size: 30px;
margin-bottom: 16px;
font-weight: bold;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
font-size: 15px;
color: rgb(175, 35, 28);
font-weight: bold;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const ShadowModal = styled.div`
width: 100vw;
height: 100%;
background-color: black;
z-index: 0;
position: fixed;
opacity: 50%;
`