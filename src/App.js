import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import './App.scss';
import About from './components/About';
import ChatWithMe from './components/ChatWithMe';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {

  useEffect(() => {
    const isOsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.querySelector('html').dataset.theme = `theme-${isOsDark ? 'dark' : 'light'}`;
  },[]);

  return (
    <div className="App">
      <div className="section-left">
        <h1>I'm Dikshita Kashodriya</h1>
        <h5>UI Developer at Media.net</h5>
        <div className="web-links">
          <div className="links-left-wrp">
            <Link activeClass="active" to="about">About</Link>
          </div>
          <div className="links-left-wrp">
            <Link activeClass="active" to="experience">Experience</Link>
          </div>
          <div className="links-left-wrp">
            <Link activeClass="active" to="projects">Projects</Link>
          </div>
          <div className="links-left-wrp">
            <Link activeClass="active" to="skills">Skills</Link>
          </div>
          <div className="links-left-wrp">
            <Link activeClass="active" to="contact">Contact</Link>
          </div>
        </div>
        <div className="profile-wrp">
          <img src={process.env.PUBLIC_URL+"/profile.png"} alt="Profile"/>
        </div>
      </div>
      <div className="section-right">
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
      <ChatWithMe/>
    </div>
  );
}

export default App;
