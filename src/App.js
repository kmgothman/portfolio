import React, { useContext } from 'react';
import './App.css';
import {  
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider 
} from "react-router-dom"
import Layout from "./pages/layout"
import Home from "./pages/home/home.component"
import About from "./pages/about/about.component"
import Contact from "./pages/contact/contact.component"
import Projects from "./pages/projects/projects.component"
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './contexts/theme.context';



  const App = () => {
    const { currentTheme} = useContext(ThemeContext)

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact  />}/>
          </Route>
      )
    )


  
      return(
        <ThemeProvider theme={currentTheme} >
        <RouterProvider router={router} />
        </ThemeProvider>
      )

  }

 export default App;
