import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import ContactsPage from "../pages/ContactsPage/ContactsPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<RegisterPage/>} />
                <Route path="/contacts" element={<ContactsPage/>} />
            </Routes>
        </BrowserRouter>
    )
}