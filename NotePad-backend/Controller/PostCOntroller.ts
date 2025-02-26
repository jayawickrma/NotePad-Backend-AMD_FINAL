import {savePost} from "../Service/PostService";

class PostController{
    async addPost(req:any,resp:any){
        try{
            await savePost(req.body);
            resp.status(201).send("Created...")
        }catch (err){
            console.log(err)
            resp.status(500).send(err)
        }

    }
    async deletePost(req:any,resp:any){

    }
    async getAllPost(req:any,resp:any){

    }
    async updatePost(req:any,resp:any){

    }


}
export default PostController;