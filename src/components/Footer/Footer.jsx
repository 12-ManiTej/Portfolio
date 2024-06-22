import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const handleScroll = (e, target) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer id='footer'>
      <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="footer__logo">Jilla Mani Tej</a>
      
      <ul className="permalinks">
        <li><a href="#home" onClick={(e) => handleScroll(e, '#home')}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleScroll(e, '#about')}>About</a></li>
        <li><a href="#skills" onClick={(e) => handleScroll(e, '#skills')}>Skills</a></li>
        <li><a href="#experience" onClick={(e) => handleScroll(e, '#experience')}>Experience</a></li>
        <li><a href="#projects" onClick={(e) => handleScroll(e, '#projects')}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mani-tej-jilla-287970242/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/12-ManiTej/" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/manitejjilla/" target="_blank" rel="noreferrer"><FaInstagram /></a>
      </div>
      
      <div className="footer__copyright">
        <small>&copy; {getYear()} ET. All rights reserved by Jilla Mani Tej</small>
      </div>
    </footer>
  );
};

export default Footer;
