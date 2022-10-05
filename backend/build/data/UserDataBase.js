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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataBase = void 0;
const app_1 = __importDefault(require("../app"));
class UserDataBase {
    constructor() {
        this.getUserByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            const result = yield app_1.default.query(`SELECT FROM contact WHERE email = $1`, [email]);
            return result;
        });
        this.getUsers = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield app_1.default.query(`SELECT * FROM contact`);
            return result.rows;
        });
        this.getUserById = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield app_1.default.query(`SELECT * FROM contact WHERE id = ${id}`);
            return result.rows;
        });
        this.editUser = (input) => __awaiter(this, void 0, void 0, function* () {
            yield app_1.default.query(`UPDATE "contact" SET name = $1, email = $2, phone = $3 WHERE id = ${input.id}`, [input.name, input.email, input.phone]);
        });
        this.deleteUser = (id) => __awaiter(this, void 0, void 0, function* () {
            yield app_1.default.query(`DELETE FROM contact WHERE id=${id}`);
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield app_1.default.query(`INSERT INTO contact ("name", "email", "phone") VALUES ($1, $2, $3)`, [user.getName(), user.getEmail(), user.getPhone()]);
        });
    }
}
exports.UserDataBase = UserDataBase;
//# sourceMappingURL=UserDataBase.js.map