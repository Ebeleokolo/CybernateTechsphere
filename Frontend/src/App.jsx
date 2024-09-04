import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import FAQ from './Components/FAQ/FAQ';
import Services from './Components/Services/Services';
import Solutions from './Components/Solutions/Solutions';
import Slider from './Components/Slider/Slider';

function App() { 

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebarHandle = () => {

    SetIsSidebarOpen(true);
  }

  const closeSidebarHandle = () => {
    SetIsSidebarOpen(false);
=======
    setIsSidebarOpen(true); // Opens the sidebar
  }

  const closeSidebarHandle = () => {
    setIsSidebarOpen(false); // Closes the sidebar
  }
  
  return (
    <div className="App">
      <Navbar openSidebarHandle={openSidebarHandle} />
      <Slider />

      {/* <Sidebar isSidebarOpen={isSidebarOpen} closeSidebarHandle={closeSidebarHandle} /> */}
=======
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebarHandle={closeSidebarHandle} />
      <Home />
      <AboutUs />
      <Services />
      <Solutions />
      <FAQ />
      <Contact />
        
    </div>
  );
}

export default App;
