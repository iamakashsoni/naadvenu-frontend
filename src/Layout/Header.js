import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/Naadvenu-Logo.png'

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (submenuName) => {
    if (openSubmenu === submenuName) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(submenuName);
    }
  };

  return (
    <header className={`header-area header-sticky`}>
      <div className="container">
        <div className="row">
          <div className="col-12 position-relative">
            <nav className="main-nav">
              <Link to="/" className="logo">
                <img src={Logo} alt="Naadvenu" />
              </Link>
              <ul className={`nav ${isMenuOpen ? 'd-block' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li className="submenu">
                  <a href="javascript:;" onClick={() => toggleSubmenu('Pages')}>
                    Pages
                  </a>
                  <ul className={`${openSubmenu === 'discover' ? 'active' : ''}`}>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/">Login</Link></li>
                  </ul>
                </li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
              <a className={`menu-trigger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
