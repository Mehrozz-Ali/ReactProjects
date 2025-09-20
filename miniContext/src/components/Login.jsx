import React, {useContext, useState,}   from 'react'
import UserContext from '../context/UserContext'

export default function Login() {

    const {username,setUsername} = useState('')
    const {password, setPassword} = useState('')
    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault() // it prevent to send value by default through its URL or by "POST" method
        setUser({username,password})
    }

    return (
        <div className=' items-center jutify-center'>
            <h2>Login</h2>
            <input type='text'
                placeholder='Usrename'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                className='bg-gray-800 text-white ml-4'
              />
              {" "}
            <input type='text'
                placeholder='Password' 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className='bg-gray-800 text-white m-4'
                 />
                 <br/>
            <button className='rounded-2xl bg-blue-500 p-2 m-4' onclick={handleSubmit} >Submit</button>
        </div>
    )
}


