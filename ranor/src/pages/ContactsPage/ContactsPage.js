import React, { useEffect, useState } from 'react'
import { GoBackButton } from '../RegisterPage/styled'
import { goTo } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import data from "../../constants/data.json"
import { Container, TextContainer, ContactListContainer, ContactContainer, EditAndDeleteButton } from './styled'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'

const ContactsPage = () => {

    const navigate = useNavigate()

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        axios.get(`${BASE_URL}`)
        .then((res) => {

        })
        .catch((error) => {

        })
    })

    const editUser = (email) => {
        axios.put(`${BASE_URL}`)
        .then((res) => {

        })
        .catch((error) => {

        })
    }

    const deleteUser = (email) => {
        axios.delete(`${BASE_URL}`)
        .then((res) => {

        })
        .catch((error) => {

        })
    }
    
    return (
        <Container>
            <TextContainer>Contacts</TextContainer>
            
            <ContactListContainer>

                {data.map((contact, index) => {

                    const { name, email, phone } = contact 

                    return (
                        <ContactContainer key = {index}>
                            <p>{name}</p>
                            <p>{email}</p>
                            <p>{phone}</p>
                            <EditAndDeleteButton onClick={() => editUser(contact.email)}>Edit</EditAndDeleteButton>
                            <EditAndDeleteButton onClick={() => deleteUser(contact.email)}>Delete</EditAndDeleteButton>
                        </ContactContainer>
                    )
                })}
            </ContactListContainer>
            <GoBackButton onClick={() => goTo(navigate, "/")}>Register User</GoBackButton>
        </Container>
    )
}

export default ContactsPage