"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailExist = void 0;
const BaseError_1 = require("./BaseError");
class EmailExist extends BaseError_1.BaseError {
    constructor() {
        super("This email already exists", 401);
    }
}
exports.EmailExist = EmailExist;
//# sourceMappingURL=EmailExist.js.map