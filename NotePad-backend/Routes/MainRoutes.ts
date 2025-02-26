import {Router} from "express";
import PostRoutes from "./SubRoutes/PostRoutes";
import postRoutes from "./SubRoutes/PostRoutes";
import userRoutes from "./SubRoutes/UserRoutes";
import {authenticateToken} from "../Utill/AuthenticateUser";

class MainRoutes{
    router:Router
    constructor() {
        this.router =Router()
        this.router.use('/post',authenticateToken,postRoutes.router);
        this.router.use('/user',userRoutes.router)
    }
}
const mainRoutes:MainRoutes =new MainRoutes();
export default mainRoutes;