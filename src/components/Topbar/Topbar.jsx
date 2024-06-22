import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { FaBriefcase } from 'react-icons/fa';
import './Topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');

  const handleScroll = (e, target) => {
    e.preventDefault();
    setActiveNav(target);
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <a href="#home" onClick={(e) => handleScroll(e, '#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#skills" onClick={(e) => handleScroll(e, '#skills')} className={activeNav === '#skills' ? 'active' : ''}><BiBook /></a>
      <a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className={activeNav === '#projects' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#experience" onClick={(e) => handleScroll(e, '#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBriefcase /></a>
      <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  );
};

export default Topbar;
