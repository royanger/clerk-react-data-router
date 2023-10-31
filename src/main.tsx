import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/home'
import PublicPage from './routes/public'
import ProtectedPage from './routes/protected'
import Layout from './routes/layout'
import AuthLayout from './routes/auth-layout'
import { SignIn, SignUp } from '@clerk/clerk-react'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/public", element: <PublicPage /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
      {
        element: <AuthLayout />,
        children: [

          { path: "/protected", element: <ProtectedPage /> }
        ]
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
