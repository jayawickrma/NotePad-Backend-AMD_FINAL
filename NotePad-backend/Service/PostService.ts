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

}