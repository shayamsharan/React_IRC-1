// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#" className="icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
        {/* Add more social media icons as needed */}
      </div>
      <p className="copyright">© 2023 Your Website Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;