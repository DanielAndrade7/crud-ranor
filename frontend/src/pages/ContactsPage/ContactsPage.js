import React, { useEffect, useState } from 'react'
import { goTo } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { Container, TextContainer, ContactListContainer, ContactContainer, EditAndDeleteButton, GoBackButton } from './styled'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import {DetailsContacts} from "../../DetailsContact/DetailsContacts"

const ContactsPage = () => {

    const navigate = useNavigate()

    const [users, setUsers] = useState([])
    const [popUp, setPopUp] = useState(false)
    const [render, setRender] = useState()

    useEffect(() => {
        axios.get(`${BASE_URL}/users/getUsers`)
            .then((res) => {
                setUsers(res.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
    })

    const deleteUser = (id) => {
        axios.delete(`${BASE_URL}/users/deleteUser/${id}`)
            .then((res) => {
                alert("User Deleted!")
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
   
    const onClickPopUp = (contact) => {
        setPopUp(true)
        const renderEdit = <DetailsContacts contact={contact} />
        setRender(renderEdit)
    }

    return (
        <Container>
            <TextContainer>Lista de Contatos</TextContainer>
            {popUp && render}

            <ContactListContainer>

                {users.map((contact, index) => {

                    const { name, email, phone } = contact

                    return (
                        <ContactContainer key={index}>
                            <p>{name}</p>
                            <p>{email}</p>
                            <p>{phone}</p>
                            <EditAndDeleteButton onClick={() => onClickPopUp(contact)}>Editar</EditAndDeleteButton>
                            <EditAndDeleteButton onClick={() => deleteUser(contact.id)}>Deletar</EditAndDeleteButton>
                        </ContactContainer>
                    )
                })}
            </ContactListContainer>
            <GoBackButton onClick={() => goTo(navigate, "/")}>Fazer Cadastro</GoBackButton>
        </Container>
    )
}

export default ContactsPage