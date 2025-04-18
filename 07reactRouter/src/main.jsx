// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import Home from "./Home/Home.jsx"
// import About from "./About/about.jsx"

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [  // <-- fixed from 'Children' to 'children'
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         path: '/about',
//         element: <About />
//       },
//     ]
//   }
// ])

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// )
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./Home/Home.jsx"
import About from "./About/about.jsx"
import ContactUs from './Contact/contactUs.jsx'
import User from './User/user.jsx'
import Github, { GithubInfoLoader } from './Github/github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> {/* this is for path="/" */}
      <Route path="about" element={<About />} />
      <Route path="contactUs" element={<ContactUs/>}/>
      <Route path="/User/:userid" element={<User/>}/>
      <Route  loader={GithubInfoLoader} path="/Github" element={<Github/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
