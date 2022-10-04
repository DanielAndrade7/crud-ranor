import React, { useState } from 'react'
import useForm from "../../hooks/useForm"
import { InputContainer, SendButton, Container, TitleContainer, RegisterContainer, GoBackButton } from './styled'
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

        axios.post(`${BASE_URL}`, form)
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
                <TitleContainer>Complete with your credencials</TitleContainer>
                <InputContainer onSubmit={RegisterUser} >
                    <input
                        name={"name"}
                        placeholder="Name"
                        value={form.name}
                        onChange={onChange}
                        required
                        pattern={"^.{3,}"}
                        title={"The name must have at least 3 characters"}
                    />
                    <input
                        name={"email"}
                        placeholder="Email"
                        value={form.email}
                        type={"email"}
                        onChange={onChange}
                        required
                    />
                    <input
                        name={"phone"}
                        placeholder="Phone"
                        value={form.phone}
                        onChange={onChange}
                        required
                        pattern={"^.{11,}"}
                        title={"The phone must have at least 11 numbers"}
                    />
                    <SendButton>Register</SendButton>
                </InputContainer >
            </RegisterContainer >

            <GoBackButton onClick={() => goTo(navigate, "contacts")}>Contacts</GoBackButton>
        </Container >
    )
}

export default RegisterPage