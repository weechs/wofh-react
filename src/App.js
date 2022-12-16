import React, { useState } from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from "./pages/discover";
import Enquire from "./pages/enquire";
import Home from "./pages/home";
import Journey from "./pages/journey";
import Partnership from "./pages/partnership";
import Professionals from "./pages/professionals";
import Support from "./pages/support";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Snow from "./components/snowflake";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Snow />
      <Routes>
        <Route path="/discover" exact element={<Discover />}></Route>
        <Route path="/enquire" exact element={<Enquire />}></Route>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/journey" exact element={<Journey />}></Route>
        <Route path="/partnership" exact element={<Partnership />}></Route>
        <Route path="/professionals" exact element={<Professionals />}></Route>
        <Route path="/support" exact element={<Support />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
