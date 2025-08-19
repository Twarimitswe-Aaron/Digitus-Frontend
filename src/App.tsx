import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import Process from "./components/Process";
import Locations from "./components/Locations";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  React.useEffect(() => {
    if (window.location.hash) {
      const newUrl = window.location.pathname + window.location.search;
      window.history.replaceState(null, "", newUrl);
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden  transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Problem />
        
        <Services />
        <Process />
        <Locations />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
