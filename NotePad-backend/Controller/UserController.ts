import {addUser, findByEmail} from "../Service/UserService";
import {UserDTO} from "../DTO/UserDTO";
import jwt,{Secret} from "jsonwebtoken";

class UserController{
    async signUp(req:any,resp:any){
        try{
            await addUser(req.body)
            resp.status(201).send('Created User...')
        }catch (err){
            console.log(err)
            resp.status(500).send(err)
        }
    }
    async signIn(req:any,resp:any){
        const email =req.body.email;
        const password =req.body.password;
        const name =req.body.name

        const user:UserDTO  ={email,password,name}
        try{
            const verified =await findByEmail(user);

            if (verified){
                const token =jwt.sign({email},process.env.SECRET_KEY as Secret,{expiresIn:"1d"});
                const refreshToken =jwt.sign({email},process.env.REFRESH_TOKEN as Secret,{expiresIn:"7d"});
                resp.json({accessToken:token,refreshToken:refreshToken})
            }else {
                resp.sendStatus(403).send("Invalid Credentials...")
            }
        }catch (err){
            console.log(err);
            resp.status(401).send(err)
        }
    }

    async refreshToken(req:any,resp:any){
        const authHeader =req.headers.authorization;
        const refreshToken =authHeader?.split(' ')[1];

            if (!refreshToken)resp.status('No token provided...')

        try{

        }catch (err){
            console.log(err)
            resp.status(401).send(err)
        }
    }
}
export default UserController;