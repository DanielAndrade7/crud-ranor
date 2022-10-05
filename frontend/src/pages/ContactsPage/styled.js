import styled from "styled-components"

export const Container = styled.div`
background-color: rgb(175, 35, 28);
color: white;
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
align-items: center;
overflow-y: hidden;

> p {
    color: white;
    font-size: 40px;
}
`

export const TextContainer = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
height: 16vh;
display: flex;
align-items: center;
justify-content: center;
font-size: 60px;
font-weight: bold;
`

export const ContactListContainer = styled.div`
display: flex;
flex-direction: column;
width: 65vw;
height: 65vh;
align-items: center;
background-color: #FFF; 
border: 2px solid white;
overflow-y: scroll;
padding-top: 45px;
border-radius: 20px;
&::-webkit-scrollbar {
       display: none;
    }
`

export const ContactContainer = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
display: flex;
color: rgb(175, 35, 28);
border: 2px solid rgb(175, 35, 28);
width: 90%;
height: 15%;
align-items: center;
justify-content: space-around;
font-size: 20px;
margin: auto;
min-height: 80px;
margin-top: 5px;
margin-bottom: 10px;
border-radius: 10px;
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
  font-size: 30px;
  font-weight: bold;
  transition: font-size 0.5s;
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
    background-color: rgb(175, 35, 28) ;
    transition: background-color 0.5s;
    color: white;
}
`
