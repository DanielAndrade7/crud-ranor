"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidEmail = void 0;
const BaseError_1 = require("./BaseError");
class InvalidEmail extends BaseError_1.BaseError {
    constructor() {
        super("Parameter 'email' invalid", 404);
    }
}
exports.InvalidEmail = InvalidEmail;
//# sourceMappingURL=InvalidEmail.js.map