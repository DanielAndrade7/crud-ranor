"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const UserBusiness_1 = require("../business/UserBusiness");
const UserController_1 = require("../controller/UserController");
const UserDataBase_1 = require("../data/UserDataBase");
exports.userRouter = (0, express_1.Router)();
const userController = new UserController_1.UserController(new UserBusiness_1.UserBusiness(new UserDataBase_1.UserDataBase()));
exports.userRouter.post("/createUser", userController.createUser);
exports.userRouter.get("/getUsers", userController.getUsers);
exports.userRouter.put("/editUser/:id", userController.editUser);
exports.userRouter.delete("/deleteUser/:id", userController.deleteUser);
//# sourceMappingURL=UserRouter.js.map