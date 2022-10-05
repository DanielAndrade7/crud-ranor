import { useNavigate } from "react-router-dom"
import useForm from "../hooks/useForm"
import { Container, InputContainer, SendButton, TitleContainer, Label, Wrapper, Input, ShadowModal } from "./styled"
import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { useState } from "react"

export const DetailsContacts = ({ contact }) => {

    const { id, name, email, phone } = contact

    const { form, onChange, cleanFields } = useForm({
        name,
        email,
        phone
    })

    const [user, setUser] = useState()

    // const navigate = useNavigate()

    const editUser = () => {
        axios.put(`${BASE_URL}/users/editUser/${id}`, {name: form.name, email: form.email, phone: form.phone})
            .then((res) => {
                console.log(setUser)
                setUser(res.data)
            })
            .catch((error) => {
                console.log(error.message)
            })

        cleanFields()
    }

    return ( <>
        <ShadowModal></ShadowModal>
        <Container>
            <TitleContainer>Edite o cadastro</TitleContainer>
            <InputContainer onSubmit={editUser} >
                <Wrapper>
                <Label>Nome:</Label>
                <Input
                    name={"name"}
                    placeholder="Name"
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
                    placeholder="Email"
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
                    placeholder="Phone"
                    value={form.phone}
                    onChange={onChange}
                    required
                    pattern={"^.{11,}"}
                    title={"The phone must have at least 11 numbers"}
                />
                </Wrapper>
                <SendButton>Salvar</SendButton>
                <SendButton>Voltar</SendButton>
            </InputContainer >

        </Container>
        </>
    )
}