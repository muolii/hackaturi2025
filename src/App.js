// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Sponsors from './pages/Sponsors';
import Schedule from './pages/Schedule';
import Team from './pages/Team';
import FAQ from './pages/FAQ';
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
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;