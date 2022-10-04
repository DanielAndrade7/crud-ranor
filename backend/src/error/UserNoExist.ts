import { BaseError } from "./BaseError";

export class UserNoExist extends BaseError {
  constructor() {
    super("This user don't exist", 401);
  }
}
