import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./pages/about";
import Affiliate from "./pages/affiliate";
import ContactUs from "./pages/contact";
import Home from "./pages/home";
import Privacy from "./pages/privacy";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;