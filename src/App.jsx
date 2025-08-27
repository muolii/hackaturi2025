// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header.jsx';
import CountdownTimer from './components/Countdown.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Sponsors from './pages/Sponsors.jsx';
import Schedule from './pages/Schedule.jsx';
import Team from './pages/Team.jsx';
import FAQ from './pages/FAQ.jsx';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'sponsors':
        return <Sponsors setCurrentPage={setCurrentPage} />;
      case 'schedule':
        return <Schedule setCurrentPage={setCurrentPage} />;
      case 'team':
        return <Team setCurrentPage={setCurrentPage} />;
      case 'faq':
        return <FAQ setCurrentPage={setCurrentPage} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <CountdownTimer />
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;
