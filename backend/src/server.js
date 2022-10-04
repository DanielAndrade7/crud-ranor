import express from "express"
import routes from "./routes.js"

const app = express()
app.use(express.json())
app.use(routes)

app.get("/health", (req, res) => {
    return res.json("up")
})

app.listen(3003, () => console.log("server na porta 3003"))