"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNoExist = void 0;
const BaseError_1 = require("./BaseError");
class UserNoExist extends BaseError_1.BaseError {
    constructor() {
        super("This user don't exist", 401);
    }
}
exports.UserNoExist = UserNoExist;
//# sourceMappingURL=UserNoExist.js.map