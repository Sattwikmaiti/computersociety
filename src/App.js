import React from 'react'
import "./App.css"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from './components/Home/Home.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Alumini from './components/Alumini/Alumini.js'
import Faculty from './components/Faculty/Faculty.js'
import Members from './components/Members/Members.js'
import Events from './components/Events/Events.js'

import Navbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js'
import Login from './components/Login/Login.js'
const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
     
      {
        path: "/Alumini",
        element: <Alumini/>,
      },
      {
        path: "/Faculty",
        element: <Faculty />,
      },
      {
        path: "/Members",
        element: <Members />,
      },
      {
        path: "/Events",
        element: <Events />,
      },
      {
        path:"/",
        element:<Login />,
      }
    ],


   
  },
]);

const App = () => {
  return (
  <div>
    <RouterProvider router={router} />
    
  </div>
  )
}

export default App
