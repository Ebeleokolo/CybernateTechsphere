import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact";
import FAQ from "./Components/FAQ/FAQ";
import Services from "./Components/Services/Services";
import Solutions from "./Components/Solutions/Solutions";
import Slider from "./Components/Slider/Slider";
import Footer from "./Components/Footer/Footer";
import { useMediaQuery } from "react-responsive";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const openSidebarHandle = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebarHandle = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="App">
      <Navbar openSidebarHandle={openSidebarHandle} />
      <Slider />
      {isDesktop && (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          closeSidebarHandle={closeSidebarHandle}
        />
      )}
      {isTablet && (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          closeSidebarHandle={closeSidebarHandle}
        />
      )}
      {isMobile && isSidebarOpen && (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          closeSidebarHandle={closeSidebarHandle}
        />
      )}
      <AboutUs />
      <Services />
      <Solutions />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
