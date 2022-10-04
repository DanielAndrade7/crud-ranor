import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { ICreateUserInput, IDeletePostInput, IEditPostInput } from "../model/User";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    public createUser = async (req: Request, res: Response) => {
        try {
            const {name, email, phone} = req.body

            const input: ICreateUserInput = {
                name,
                email,
                phone
            }

            const response = await this.userBusiness.createUser(input)

            res.status(201).send(response)

        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }

    public getUsers = async (req: Request, res: Response) => {
        try {
            const users = await this.userBusiness.getUsers()
        
            res.status(200).send(users)
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }

    public editUser = async (req: Request, res: Response) => {
        try {
            const {name, email, phone} = req.body
            const { id } = req.params

            const input: IEditPostInput = {
                id,
                name,
                email,
                phone
            }

            const response = this.userBusiness.editUser(input)
            
            res.status(200).send(response)
            
        } catch (error: any) {
             res.status(error.statusCode || 500).send({message: error.message})
        }
    }

    public deleteUser = async (req: Request, res: Response) => {
        try {
            const { id } = req.params

            const input: IDeletePostInput = {
                id
            }

            const response = this.userBusiness.deleteUser(input)

            res.status(200).send(response)

        } catch (error: any) {
             res.status(error.statusCode || 500).send({message: error.message})
        }
    }
}
