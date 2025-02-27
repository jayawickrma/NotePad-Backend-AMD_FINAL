import  {Router} from "express";
import PostController from "../../Controller/PostCOntroller";

class PostRoutes{
        router:Router
        postController:PostController
    constructor() {
        this.router =Router();
        this.postController =new PostController()
        this.initialRoutes()

    }
    initialRoutes():void{
        this.router.post('/savePost',this.postController.addPost);
        this.router.get('/getPost',this.postController.getAllPost);
        this.router.delete('/deletePost',this.postController.deletePost);
        this.router.put('/updatePost',this.postController.updatePost)
    }


}
const postRoutes:PostRoutes = new PostRoutes();
export  default  postRoutes;