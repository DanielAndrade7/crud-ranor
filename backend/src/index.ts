import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./router/UserRouter";

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => console.log("Server is running in http://localhost: 3003"));

app.use("/users", userRouter)
