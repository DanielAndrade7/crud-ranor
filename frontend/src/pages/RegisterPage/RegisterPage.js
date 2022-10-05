import React, { useState } from 'react'
import useForm from "../../hooks/useForm"
import { InputContainer, SendButton, Container, TitleContainer, RegisterContainer, GoBackButton, Input, Wrapper, Label } from './styled'
import { goTo } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from "../../constants/urls"

const RegisterPage = () => {

    const navigate = useNavigate()

    const { form, onChange, cleanFields } = useForm({
        name: "",
        email: "",
        phone: ""
    })

    const [userList, setUserList] = useState({})

    const RegisterUser = (event) => {

        axios.post(`${BASE_URL}/users/createUser`, form)
        .then((res) => {
            setUserList(res.data)
        })
        .catch((error) => {
            console.log(error.message)
        })

        event.preventDefault()
        cleanFields()
    }

    return (
        <Container>
            <RegisterContainer>
                <TitleContainer>Faça o cadastro</TitleContainer>
                <InputContainer onSubmit={RegisterUser} >
                    <Wrapper>
                        <Label>Nome:</Label>
                        <Input
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        required
                        pattern={"^.{3,}"}
                        title={"The name must have at least 3 characters"}
                    />
                    </Wrapper>
                    <Wrapper>
                        <Label>E-mail:</Label>
                    <Input
                        name={"email"}
                        value={form.email}
                        type={"email"}
                        onChange={onChange}
                        required
                    />
                    </Wrapper>
                    <Wrapper>
                        <Label>Telefone:</Label>
                    <Input
                        name={"phone"}
                        value={form.phone}
                        onChange={onChange}
                        required
                        pattern={"^.{11,}"}
                        title={"The phone must have at least 11 numbers"}
                    />
                    </Wrapper>
                    <SendButton>Enviar</SendButton>
                </InputContainer >
            </RegisterContainer >

            <GoBackButton onClick={() => goTo(navigate, "contacts")}>Contacts</GoBackButton>
        </Container >
    )
}

export default RegisterPage