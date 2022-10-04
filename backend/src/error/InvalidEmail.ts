import { BaseError } from "./BaseError";

export class InvalidEmail extends BaseError {
  constructor() {
    super("Parameter 'email' invalid", 404);
  }
}
