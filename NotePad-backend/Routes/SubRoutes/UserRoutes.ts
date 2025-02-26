import {Router} from "express";
import UserController from "../../Controller/UserController";

class UserRoutes{
    router:Router;
    userController:UserController

    constructor() {
        this.router = Router();
        this.userController =new UserController();
        this.initialRoutes();
    }

    initialRoutes():void{
        this.router.post('/signUp',this.userController.signUp);
        this.router.post('/signIn',this.userController.signIn)
    }
}
const userRoutes:UserRoutes =new UserRoutes();
export default userRoutes;