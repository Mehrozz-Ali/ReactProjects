import conf from '../conf/conf'

import { Client, Databases, Account } from "appwrite";


export class Authservice{
    client =new Client()

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setEndpoint(conf.appwriteProjectId)
        this.account=new Account(this.account)
    }
    async createAccount({email,password,name}){
        try{
            const userAccount=await this.account.create(ID.unique(), email,password,name)
            if (userAccount){
                // call another method
                return this.login({email,password})
            }else{
                    return userAccount
                }
        }catch (error){
            throw error;
        }
    }

    async login({email, password }){
        try{
            return await this.account.createEmailSession(email,password)
        }catch{
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
            console.log("Appwrite service :: getCurrentUser :: error", error)
        }
        return null; 
    }

    async logout(){
        try{
            await this.account.deleteSessions()
        }catch(error){
            console.log("Apwrite service :: logout :: error", error)
        }
    }

}
// when we make a class then then we have to make a object for this class usage 


/* so its a better approach is that we export this class by making a object  */
const authService = new Authservice()
export default authService
/* now by using method we can access all methods of object of that class  */ 