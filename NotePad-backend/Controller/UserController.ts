import {addUser} from "../Service/UserService";

class UserController{
    async addUser(req:any,resp:any){
        try{
            await addUser(req.body)
            resp.status(201).send('Created User...')
        }catch (err){
            console.log(err)
            resp.status(500).send(err)
        }
    }
    async deleteUser(req:any,resp:any){}
    async getAllUsers(req:any,resp:any){}
    async updateUser(req:any,resp:any){}
}
export default UserController;