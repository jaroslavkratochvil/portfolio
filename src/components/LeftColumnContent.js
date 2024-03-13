import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import About from './About';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import Home from './Home';
import TranssportOrder from './TransportOrder'
import '../App.css';

function LeftColumnContent() {
  const location = useLocation();

  return (
      <motion.div key={location.key} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{duration: 2}}>
        <Routes location={location}>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/education" element={<Education/>} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/taxi" element={<TranssportOrder/>} />
          </Routes>
      </motion.div>
  );
}

export default LeftColumnContent;
