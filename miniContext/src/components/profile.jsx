import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
import UserContextProvider from '../context/UserContext(provider)'


function Profile() {
    const {user}=useContext(UserContext)
        if (!user) return <div>Please login</div>

        return <div>Welcom {user.username}</div>
}

export default Profile 
