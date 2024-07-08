import React from "react";
import styles from "./styles/App.module.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";

function App() {
  const router = createBrowserRouter([
    {
    path: '/',
    element: <Home/>
  },
  {
    path: '/About',
    element: <About/>
  },
  {
    path:'/Project',
    element: <Project/>
  }
])
  return (
    <div className={styles.app}>
    <RouterProvider router={router}/>
    <footer>
    
    </footer>
    </div>
  );
}

export default App;
