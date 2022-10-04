import { useNavigate } from "react-router-dom"
import useForm from "../hooks/useForm"
import { Container, InputContainer } from "./styled"
import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { useState } from "react"

export const DetailsContacts = ({contact}) => {

    const {id, name, email, phone} = contact

    const { form, onChange, cleanFields } = useForm({
        name,
        email,
        phone
    })
    
    const [user, setUser] = useState()

    // const navigate = useNavigate()

        const editUser = (id) => {
        axios.put(`${BASE_URL}/users/editUser/${id}`)
            .then((res) => {
                console.log(setUser)
                setUser(res.data)
            })
            .catch((error) => {
                console.log(error.message)
            })

        cleanFields()
    }

    return (
        <Container>
            <InputContainer onSubmit={editUser} >
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
                <button>Save</button>
            </InputContainer >

            <button>Contacts</button>
        </Container>
    )
}