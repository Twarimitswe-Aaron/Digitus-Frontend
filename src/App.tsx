import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import Process from "./components/Process";
import Locations from "./components/Locations";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

import Login from "./components/Login";


function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // List of routes where header/footer should be hidden
  const hideHeaderFooter = ["/login"];

  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-300">
      {!hideHeaderFooter.includes(location.pathname) && <Header />}
      <main>{children}</main>
      {!hideHeaderFooter.includes(location.pathname) && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Login route without header/footer */}
        <Route path="/login" element={<Login />} />

        {/* All other routes inside Layout */}
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <Problem />
              <Services />
              <Process />
              <Locations />
              <Testimonials />
              <CallToAction />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
