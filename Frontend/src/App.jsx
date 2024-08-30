import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import FAQ from './Components/FAQ/FAQ';
import Services from './Components/Services/Services';
import Solutions from './Components/Solutions/Solutions';

function App() { 
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Home />
      <AboutUs />
      <Contact />
      <FAQ />
      <Services />
      <Solutions />
    </div>
  );
}

export default App;
