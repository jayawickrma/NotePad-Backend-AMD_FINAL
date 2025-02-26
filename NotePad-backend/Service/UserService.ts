import {UserDTO} from "../DTO/UserDTO";
import prisma from "../../prisma/Client";
import bcrypt from 'bcrypt';
export async function addUser(user:UserDTO){
    const hashedPw =await bcrypt.hash(user.password,10)
    try{
        const data =await prisma.user.create({
            data:{
                email:user.email,
                password:hashedPw,
                name:user.name,
                createdAt:new Date(),
                updatedAt:new Date(),
            }
        })
    }catch (err){
        console.log(err)
        throw new Error("Something went wrong")
    }
}