import React, { useEffect, useState } from 'react'
import { GoBackButton } from '../RegisterPage/styled'
import { goTo } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { Container, TextContainer, ContactListContainer, ContactContainer, EditAndDeleteButton } from './styled'
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
            <TextContainer>Contacts</TextContainer>
            {popUp && render}

            <ContactListContainer>

                {users.map((contact, index) => {

                    const { name, email, phone } = contact

                    return (
                        <ContactContainer key={index}>
                            <p>{name}</p>
                            <p>{email}</p>
                            <p>{phone}</p>
                            <EditAndDeleteButton onClick={() => onClickPopUp(contact)}>Details</EditAndDeleteButton>
                            <EditAndDeleteButton onClick={() => deleteUser(contact.id)}>Delete</EditAndDeleteButton>
                        </ContactContainer>
                    )
                })}
            </ContactListContainer>
            <GoBackButton onClick={() => goTo(navigate, "/")}>Register User</GoBackButton>
        </Container>
    )
}

export default ContactsPage