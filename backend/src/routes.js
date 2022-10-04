import express from "express"
import connection from "./database.js"

const routes = express.Router()


// C

routes.post("/todos", async (req, res) => {
    const {name, email, phone} = req.body

    if(!name) {

    }

    await connection.query(`
     INSERT INTO contact ("name", "email", "phone") VALUES ($1, $2, $3)`,
        [name, email, phone])

    return res.status(201).send("User created!")
})

    


// R

routes.get("/todos", (req, res) => {
    return res.status(200).send(users)
})

// await connection.query(`
//      SELECT * FROM contact ("name", "email", "phone") VALUES ($1, $2, $3)`,
//     [name, email, phone])


// U
// D

export default routes

