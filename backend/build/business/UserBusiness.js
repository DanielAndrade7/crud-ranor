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
exports.UserBusiness = void 0;
const InvalidEmail_1 = require("../error/InvalidEmail");
const InvalidPhone_1 = require("../error/InvalidPhone");
const MissingFields_1 = require("../error/MissingFields");
const User_1 = require("../model/User");
class UserBusiness {
    constructor(userDatabase) {
        this.userDatabase = userDatabase;
        this.createUser = (input) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, phone } = input;
            if (!name || !email || !phone) {
                throw new MissingFields_1.MissingFields();
            }
            if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                throw new InvalidEmail_1.InvalidEmail();
            }
            if (phone.length !== 11) {
                throw new InvalidPhone_1.InvalidPhone();
            }
            const user = new User_1.User(name, email, phone);
            yield this.userDatabase.createUser(user);
            const response = {
                message: `User ${user.getName()} created!`
            };
            return response;
        });
        this.getUsers = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.userDatabase.getUsers();
            return response;
        });
        this.editUser = (input) => __awaiter(this, void 0, void 0, function* () {
            const { id, name, email, phone } = input;
            yield this.userDatabase.editUser(input);
            const response = {
                message: `User edited!`
            };
            return response;
        });
        this.deleteUser = (input) => __awaiter(this, void 0, void 0, function* () {
            const { id } = input;
            yield this.userDatabase.deleteUser(id);
            const response = {
                message: `User deleted!`
            };
            return response;
        });
    }
}
exports.UserBusiness = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map