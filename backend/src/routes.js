// import express from "express"
// import connection from "./database.js"

// const routes = express.Router()


// // C

// routes.post("/createUser", async (req, res) => {
//     const {name, email, phone} = req.body

//     if(!name || !email || !phone) {

//     }

//     await connection.query(`
//      INSERT INTO contact ("name", "email", "phone") VALUES ($1, $2, $3)`,
//         [name, email, phone])

//     return res.status(201).send("User created!")
// })


// // R

// routes.get("/users", async (req, res) => {

//     const result = await connection.query(`SELECT * FROM contact`)
//     return res.status(200).send(result.rows)
// })

// // U

// routes.put("/users/:id", async (req, res) => {
//     const {name, email, phone} = req.body
//     const {id} = req.params

//     await connection.query(`UPDATE contact SET name = $1, email = $2, phone = $3 WHERE id = ${id}`, [`${name}`, `${email}`, `${phone}`])
//     return res.status(200).send(`User updated!`)
// })

// // ['joaozinho', 'joao@teste.com', 1]

// // D

// routes.delete("/users/:id", async (req, res) => {
//     const {id} = req.params
//     await connection.query(`DELETE FROM contact WHERE id=${id}`)
//     return res.status(200).send("User deleted!")
// })

// export default routes

