import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from './Components/About.tsx'
import Skills from './Components/Skills.tsx'
import Projects from './Components/Projects.tsx'
import Contact from './Components/Contact.tsx'
import Navbar from './UI/Navbar.tsx'
import Journey from './Components/Journey.tsx'

import {store} from  './Store.ts'
import { Provider } from 'react-redux'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>

      <Navbar />

      <div id="home">
        <App />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="journey">
        <Journey />
      </div>

      <div id="contact">
        <Contact />
      </div>

    </Provider>
  </StrictMode>,
);

