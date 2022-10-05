"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, email, phone) {
        this.getName = () => {
            return this.name;
        };
        this.getEmail = () => {
            return this.email;
        };
        this.getPhone = () => {
            return this.phone;
        };
        (this.name = name),
            (this.email = email),
            (this.phone = phone);
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map