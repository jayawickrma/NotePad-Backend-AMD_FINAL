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
        this.router.post('/addUser',this.userController.addUser)
        this.router.delete('/deleteUser',this.userController.deleteUser)
        this.router.put('/updateUser',this.userController.updateUser)
        this.router.get('/getAllUsers',this.userController.getAllUsers)
    }
}
const userRoutes:UserRoutes =new UserRoutes();
export default userRoutes;