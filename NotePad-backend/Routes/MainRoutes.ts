import {Router} from "express";
import PostRoutes from "./SubRoutes/PostRoutes";
import postRoutes from "./SubRoutes/PostRoutes";
import userRoutes from "./SubRoutes/UserRoutes";
import {authenticateToken} from "../Utill/AuthenticateUser";

class MainRoutes{
    router:Router
    constructor() {
        this.router =Router()
        this.router.use('/post',postRoutes.router);
        this.router.use('/auth',userRoutes.router)
    }
}
const mainRoutes:MainRoutes =new MainRoutes();
export default mainRoutes;