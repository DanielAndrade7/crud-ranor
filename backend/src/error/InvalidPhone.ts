import { BaseError } from "./BaseError";

export class InvalidPhone extends BaseError {
  constructor() {
    super("Parameter 'phone' invalid", 404);
  }
}
