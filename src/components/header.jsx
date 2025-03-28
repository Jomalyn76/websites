import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/header.css';
import logoimg from '../assets/logo.png';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo" >
      <img src={logoimg} alt="Logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
  <span className={menuOpen ? 'bar open' : 'bar'}></span>
  <span className={menuOpen ? 'bar open' : 'bar'}></span>
  <span className={menuOpen ? 'bar open' : 'bar'}></span>
</div>
<nav className={menuOpen ? 'nav active' : 'nav'}>
  <ul>
    <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
    <li><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT ME</Link></li>
    <li><a href="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</a></li>
    <li><a href="#blogs" onClick={() => setMenuOpen(false)}>BLOGS</a></li>
    <li><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a></li>
  </ul>
</nav>
    </header>
  );
};

export default Header;