import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const {data ,setdata}=useState([followers='0'])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data); 
    //         setdata(data)
    //     })
    // },[])
    return (
        <>
            <div className='bg-gray-500 text-center text-white p-4 text-2xl'>Github-followers: {data.followers}</div>
        </>
    )
}

export default Github
export const GithubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
