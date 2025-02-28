import {deletePost, getAllPosts, savePost, updatePost} from "../Service/PostService";
import {PostDTO} from "../DTO/PostDTO";
class PostController{
    async addPost(req:any,resp:any){
        console.log(req.body)
        try{
            await savePost(req.body);
            resp.status(201).send("Created...")
        }catch (err){
            console.log(err)
            resp.status(500).send(err)
        }

    }
    async deletePost(req:any,resp:any){
        const id =parseInt(req.query['id'])
        try{
            await deletePost(id)
            resp.status(200).status("deleted Note :",id)
        }catch (err){
            console.log(err)
            resp.status(500).send(err)
        }

    }
    async getAllPost(req:any,resp:any){
            try{
                const res =await getAllPosts()
                resp.status(200).send(res)
            }catch (err){
                console.log(err)
                resp.status(500).send(err)
            }
    }
    async updatePost(req:any,resp:any){
        const id  =parseInt(req.query['id'])
        const post:PostDTO =req.body
            try{
                await updatePost(id,post)
                resp.status(200).send("Updated...")
            }catch (err){
                console.log(err)
                resp.status(500).send(err)
            }
    }



}
export default PostController;