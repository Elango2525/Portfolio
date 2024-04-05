// components/Home.js
import React, { useState } from 'react';
import './styles/Home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont } from '@fortawesome/free-solid-svg-icons';
import { faFontCase } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram,faGoogle } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="home-page">
      <header className="header">
        <nav className={`navigation ${showNav ? 'show' : ''}`}>
          <div className="profile-picture-container">
            <img
              src="https://i.pinimg.com/564x/8e/c1/95/8ec195d92fcc14ac36beaa4938d1fa3c.jpg"
              alt="Profile"
              className="profile-picture"
            />
          </div>
          <a href="#home" className="nav-link" onClick={toggleNav}>
            Home
          </a>
          <Link to="/projects" className="nav-link" onClick={toggleNav}>
            Projects
          </Link>
          
          <Link to="/skills" className="nav-link" onClick={toggleNav}>
            Skills
          </Link>
          <Link to="/ach" className="nav-link" onClick={toggleNav}>
            Achievements
          </Link>
          <a href="#blog" className="nav-link" onClick={toggleNav}>
            Blog
          </a>
          <a href="#gallery" className="nav-link" onClick={toggleNav}>
            Gallery
          </a>
          <a href="#resume" className="nav-link" onClick={toggleNav}>
            Resume
          </a>
          <a href="#about" className="nav-link" onClick={toggleNav}>
            About
          </a>
        </nav>
      </header>
      <div className="content">
        <main className="main-content">
          <div className="blockquote-wrapper">
            <div className="blockquote">
              <div className="quote-content">
                <h1>
                  Intuitive design happens when{' '}
                  <span style={{ color: '#ffffff' }}>current knowledge</span> is the same as the{' '}
                  <span style={{ color: '#ffffff' }}>target knowledge.</span>
                </h1>
              </div>
            </div>
          </div>
          
        </main>
      </div>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          {/* Social Media */}
          <div className="footer-option">
            <span className="footer-heading">Follow Us:</span>
            <div className="social-media-icons">
              <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-option">
            <span className="footer-heading">Subscribe to Our Newsletter:</span>
            <input type="email" placeholder="Enter your email" />
            <div className="sub">
            <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="footer-option">
            <span className="footer-heading">Contact Us:</span>
            <div className="contact-details">
              <p>Phone: xxx-xxx-xxxx</p>
              <p>Address: 123 Main St, Cityville</p>
              <p>Fax: xxx-xxx-xxxx</p>
            </div>
          </div>
         
        </div><div className="copyright">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
};

export default Home;
