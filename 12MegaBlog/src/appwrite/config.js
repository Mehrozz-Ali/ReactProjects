import conf from '../conf/conf'
import {Client,ID,Databases, Storage,Query} from "appwrite"



export class Service {
    client = new Client()
    databases;
    bucket; //bucket means storage
    
    
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases=new Databases(this.client)
        this.bucket=new Storage(this.client)
    }

    /* ************ File uploading services ************   */
    async createPost({title,slug,content,featuredImage,status,userID}){
        try {
            return await this.databases.createDocument(
                conf.appwritedatabaseID,
                conf.appwriteCollectionId,
                slug,{
                    title,
                    content,
                    featuredImage,
                    status,
                    userID,
                }
            )
        } catch (error) {
           console.log("Appwrite service :: createPost :: error ",error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwritedatabaseID,
                conf.appwriteCollectionId,
                slug,{
                    title,
                    content,
                    featuredImage,
                    status,

                }

            )
            
        } catch (error) {
            console.log("Appwrite service::updatePost::error",error);
            
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwritedatabaseID,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service:: deletePost:: error",error);
            return false;
        }
    }

    // getDocument used for getting a single element
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwritedatabaseID,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrit service :: getPost::error",error);
        }
    }

    // queries is just simple a variable 
    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocument(
                conf.appwritedatabaseID,
                conf.appwriteCollectionId,
                queries, // and now we used variable queries
            )
        } catch (error) {
            console.log("Appwrite service::getPosts::error",error);
            return false;
        }
    }

    // for uploading files 
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file // its a parameter
            )
        } catch (error) {
            console.log("Appwrite service:: uploadFile::error",error);
            
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
            return true;
        } catch (error) {
            console.log("Appwrite service:: deleteFile::error",error);
        }
    }

    // taking preview of file directly
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}
const service = new Service() // its an object of class "Service"
export default service