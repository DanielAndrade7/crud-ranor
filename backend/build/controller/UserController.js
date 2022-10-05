"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(userBusiness) {
        this.userBusiness = userBusiness;
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, phone } = req.body;
                const input = {
                    name,
                    email,
                    phone
                };
                const response = yield this.userBusiness.createUser(input);
                res.status(201).send(response);
            }
            catch (error) {
                res.status(error.statusCode || 500).send({ message: error.message });
            }
        });
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userBusiness.getUsers();
                res.status(200).send(users);
            }
            catch (error) {
                res.status(error.statusCode || 500).send({ message: error.message });
            }
        });
        this.editUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, phone } = req.body;
                const { id } = req.params;
                const input = {
                    id,
                    name,
                    email,
                    phone
                };
                const response = this.userBusiness.editUser(input);
                res.status(200).send(response);
            }
            catch (error) {
                res.status(error.statusCode || 500).send({ message: error.message });
            }
        });
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const input = {
                    id
                };
                const response = this.userBusiness.deleteUser(input);
                res.status(200).send(response);
            }
            catch (error) {
                res.status(error.statusCode || 500).send({ message: error.message });
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map