import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom'; 
import '../App.css';

const Dropdown = () => {

    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageChange = (selectedLanguage) => {
        console.log(`Vybrán jazyk: ${selectedLanguage}`);
        setIsOpen(false); 
    };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={handleDropdownToggle}>Jazyk</button>
      {isOpen && (
        <motion.div
          className="dropdown-content"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <a onClick={() => handleLanguageChange('Czech')}>Čeština</a>
          <a onClick={() => handleLanguageChange('English')}>English</a>
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
