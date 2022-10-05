"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingFields = void 0;
const BaseError_1 = require("./BaseError");
class MissingFields extends BaseError_1.BaseError {
    constructor() {
        super("You need to pass all the parameters", 404);
    }
}
exports.MissingFields = MissingFields;
//# sourceMappingURL=MissingFields.js.map