import connection from "../app"
import { IEditPostInput, User } from "../model/User";



export class UserDataBase {
  public async createUser(user: User) {
      await connection.query(
        `INSERT INTO contact ("name", "email", "phone") VALUES ($1, $2, $3)`,
        [user.getName(), user.getEmail(), user.getPhone()]
      )
  }

  public getUserByEmail = async (email: string) => {
    const result = await connection.query(`SELECT FROM contact WHERE email = $1`, [email])
    return result  
  }

  public getUsers = async () => {
    const result = await connection.query(`SELECT * FROM contact`)
    return result.rows
  }

    public getUserById = async (id: string) => {
    const result: any = await connection.query(`SELECT * FROM contact WHERE id = ${id}`)
    return result.rows
  }

  public editUser = async (input: IEditPostInput) => {
      await connection.query(
        `UPDATE "contact" SET name = $1, email = $2, phone = $3 WHERE id = ${input.id}`,
        [input.name, input.email, input.phone])
  }

  public deleteUser = async (id: string) => {
      await connection.query(`DELETE FROM contact WHERE id=${id}`)
  }
}

