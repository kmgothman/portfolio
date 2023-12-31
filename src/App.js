import React, { useContext } from 'react';
import {  
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider 
} from "react-router-dom"
import Layout from "./components/layout/layout.component"
import Home from "./pages/home/home.component"
import About from "./pages/about/about.component"
import Contact from "./pages/contact/contact.component"
import Projects from "./pages/projects/projects.component"
import FMP from "./pages/indivprojects/fmp.component"
import SundayLead from './pages/indivprojects/sunday_lead.component';

import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './contexts/theme.context';
import { CurrentMediaProvider } from './contexts/media.context';
import { MediaContext } from './contexts/media.context'; 



  const App = () => {
    const { currentTheme} = useContext(ThemeContext)
    const { currentMedia} = useContext(MediaContext)

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact  />}/>
            <Route path="/fmp" element={<FMP />}/>
            <Route path="/sunday-lead" element={<SundayLead/>}/>
          </Route>
      )
    )


  
      return(
        <CurrentMediaProvider media={currentMedia} >
        <ThemeProvider theme={currentTheme} >
        <RouterProvider router={router} />
        </ThemeProvider>
        </CurrentMediaProvider>
      )

  }

 export default App;
