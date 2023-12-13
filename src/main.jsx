import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import ErrorPage from './routes/ErrorPage.jsx'

// const router = createBrowserRouter([{path: "/", element: <Home />}, {path: "sobre", element: <About />}])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "sobre",
        element: <About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)