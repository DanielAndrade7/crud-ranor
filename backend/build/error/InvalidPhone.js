"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidPhone = void 0;
const BaseError_1 = require("./BaseError");
class InvalidPhone extends BaseError_1.BaseError {
    constructor() {
        super("Parameter 'phone' invalid", 404);
    }
}
exports.InvalidPhone = InvalidPhone;
//# sourceMappingURL=InvalidPhone.js.map