import React from 'react'
import appwriteService from  '../appwrite/config'
import {Link} from 'react-router-dom'

// for taking "Id" from appwrite we use a '$' sign with Id 
function PostCard({$id ,title, featuredImage}){
    return (
        // in this "$id" is a variable 
        <Link to={`/post/ ${$id}`}>
            <div className='w-full bg-gary-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <image src={appwriteService.getFilePreview(featuredImage)} alt={title}
                    className='rounded-xl'/> 
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard