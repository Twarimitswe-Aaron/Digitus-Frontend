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
import Trainer from "./components/roles/Trainer";
import HubManager from "./components/roles/HubManager";
import Admin from "./components/roles/Admin";


function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const isRolePortal = ["/trainer", "/admin", "/hubmanager"].some((p) =>
    location.pathname.startsWith(p)
  );
  const hideHeaderFooter = location.pathname === "/login" || isRolePortal;

  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-300">
      {!hideHeaderFooter && <Header />}
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Login route without header/footer */}
        <Route path="/login" element={<Login />} />

        {/* Role-based routes (wrapped in Layout for consistent header/footer) */}
        <Route
          path="/trainer/*"
          element={
            <Layout>
              <Trainer />
            </Layout>
          }
        />
        <Route
          path="/hubmanager/*"
          element={
            <Layout>
              <HubManager />
            </Layout>
          }
        />
        <Route
          path="/admin/*"
          element={
            <Layout>
              <Admin />
            </Layout>
          }
        />

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
