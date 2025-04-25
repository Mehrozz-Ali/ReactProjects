const conf={
    appwriteUrl : string(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : string(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : stringify(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId:string(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId:stringify(import.meta.env.VITE_APPWRITE_BUCKET_ID)



}

export default conf