import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import './HeaderSocials.css'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/mani-tej-jilla-287970242/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/12-ManiTej/" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/manitejjilla/" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
