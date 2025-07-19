import './index.css';
import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './store/store.js'
import { AuthLayout, SignUp } from './components/index.js';
import { RouterProvider } from 'react-router-dom';


import AddPost from './pages/AddPost.jsx'
import Signup from './pages/SignUp.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import AllPosts from './pages/AllPosts.jsx'

const router = createBrowserRouter([
  {
    path :'/',
    element : <App />,
    Children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}> 
            <Login />
          </AuthLayout>
        )
      },
      {
        path : './signup',
        element:(
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        )
      },
      {
        path :'/all-posts',
        element:(
          <AuthLayout authentication>
            {" "}
            <AllPosts />
          </AuthLayout>
        )
      },
      {
        path :'/add-post',
        element:(
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        )
      },
      {
        path :'/edit-post/:slug',
        element:(
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        )
      },
      {
        path: '/post/:slug',
        element: <Post />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
