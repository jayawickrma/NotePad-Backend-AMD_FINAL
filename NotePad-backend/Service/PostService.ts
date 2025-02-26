import {PostDTO} from "../DTO/PostDTO";
import prisma from "../../prisma/Client";

export async function savePost(postDto:PostDTO){
    try{
        const data =await prisma.post.create({
            data:{
                title:postDto.title,
                content:postDto.content,
                createdAt:new Date(),
                updatedAt:new Date(),
                author:{
                    connect:{
                        id :postDto.authorId
                    }
                }
            }
        })
        return data;
    }catch (err){
        console.log(err)
        throw new Error("Something went wrong...")
    }
}
export async function deletePost(postId:number){
    try{
        await prisma.post.delete({
            where:{
                id:postId
            }
        })
    }catch (err){
        console.log(err)
        throw new Error("Something went wrong...")
    }

}

export async function getAllPosts(){
    try{
        const all =await prisma.post.findMany()
        if (all){
            return all;
        }
    }catch (err){
        console.log(err)
        throw new Error("Something went wrong...")
    }
}
export async function updatePost(postId:number,postDto:PostDTO){
    try{
        await prisma.post.update({
            where:{id:postId},
            data:{
                title:postDto.title,
                content:postDto.content,
                createdAt:new Date(),
                updatedAt:new Date(),
                author:{
                    connect:{
                        id :postDto.authorId
                    }
                }
            }
        })
    }catch (err){
        console.log(err)
        throw new Error("Something went wrong...")
    }
}