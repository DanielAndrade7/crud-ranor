import { UserDataBase } from "../data/UserDataBase"
import { EmailExist } from "../error/EmailExist";
import { InvalidEmail } from "../error/InvalidEmail";
import { InvalidPhone } from "../error/InvalidPhone";
import { MissingFields } from "../error/MissingFields";
import { UserNoExist } from "../error/UserNoExist";
import { User, ICreateUserInput, ICreateUserOutput, IDeletePostInput, IDeletePostOutput, IEditPostInput, IEditPostOutput} from "../model/User";

export class UserBusiness {
  constructor(
    private userDatabase: UserDataBase
  ) {}

  public createUser = async (input: ICreateUserInput) => {

    const {name, email, phone} = input

    if(!name || !email || !phone) {
        throw new MissingFields()
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw new InvalidEmail()
    }

    if(phone.length !== 11) {
        throw new InvalidPhone()
    }

    // const emailExist = await this.userDatabase.getUserByEmail(email)

    //  if (emailExist) {
    //    throw new EmailExist()
    //  }

     const user = new User(name, email, phone)

     await this.userDatabase.createUser(user)

     const response: ICreateUserOutput = {
        message: `User ${user.getName()} created!`
     }

     return response
  }

  public getUsers = async () => {
    const response =await this.userDatabase.getUsers()
    return response
  }

  public editUser = async (input: IEditPostInput) => {

     const {id, name, email, phone} = input

    // const userExist = await this.userDatabase.getUserById(id)

    // if (!userExist) {
    //    throw new UserNoExist()
    //  }

     await this.userDatabase.editUser(input)

     const response: IEditPostOutput = {
        message: `User edited!`
     }

     return response
  }

  public deleteUser = async (input: IDeletePostInput) => {

    const {id} = input 

    // const userExist = await this.userDatabase.getUserById(id);

    // if (!userExist) {
    //     throw new UserNoExist()
    // }

    await this.userDatabase.deleteUser(id)

    const response: IDeletePostOutput = {
      message: `User deleted!`
    };

    return response
  }
}