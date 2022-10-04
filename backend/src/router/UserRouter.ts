import { Router } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDataBase } from "../data/UserDataBase";

export const userRouter = Router()

const userController = new UserController(
  new UserBusiness(
    new UserDataBase()
  )
)

userRouter.post("/createUser", userController.createUser)
userRouter.get("/getUsers", userController.getUsers)
userRouter.put("/editUser/:id", userController.editUser)
userRouter.delete("/deleteUser/:id", userController.deleteUser)
