// src/App.jsx
import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Sponsors from './pages/Sponsors.jsx';
import Schedule from './pages/Schedule.jsx';
import Team from './pages/Team.jsx';
import FAQ from './pages/FAQ.jsx';
import Tracks from './pages/Tracks.jsx';
import './App.css';

const App = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <Header scrollToSection={scrollToSection} />
      
      <main className="main-content">
        <section id="home" className="section">
          <Home />
        </section>
        
        <section id="about" className="section">
          <About />
        </section>
        
        <section id="tracks" className="section">
          <Tracks />
        </section>
        
        <section id="schedule" className="section">
          <Schedule />
        </section>
        
        <section id="faq" className="section">
          <FAQ />
        </section>

        <section id="sponsors" className="section">
          <Sponsors />
        </section>

        <section id="team" className="section">
          <Team />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
