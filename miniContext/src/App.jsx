import './App.css'
import UserContextProvider from './context/UserContext(provider)'
import Login from './components/Login'
import Profile from './components/profile'
function App() {

  return (
    <UserContextProvider>
      <h1 className='text-center'>Hello </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
