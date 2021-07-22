import React from 'react';  //me faltaba esta linea (no funcionaba)
import './App.css';
import NavBar from './Nav';
import About from './About2';
import Projects from './ClassProjects';
import Section from './Section';
import ContactForm from './ContactForm';
import Footer from './Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Section />
      <About />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
