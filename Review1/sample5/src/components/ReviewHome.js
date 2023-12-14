import React from 'react';
import { Link } from 'react-router-dom';
import '../Assests/CSS/ReviewHome.css';
import favicon from '../Assests/Image/favicon.ico';
import img3 from '../Assests/Image/Crew.jpg';
import final from '../Assests/Image/Furniture.jpg';
import img2 from '../Assests/Image/Furniture.jpg';
import last from '../Assests/Image/Bedroom.jpg';

const Home = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <nav>
        <ul className="nav">
          <li>
            <img src={img2} className="logo" alt="Logo" />
          </li>
          <li>
            <Link to='/home'>HOME</Link>
          </li>
          <li>
            <Link to='/contact'>CONTACT</Link>
          </li>
          <li>
            <Link to='/signup' className="same">SIGN UP</Link>
          </li>
          <li>
            <Link to="/login" className="same">LOGIN</Link>
          </li>
          <li>
            <a href="#" className="same">ABOUT US</a>
          </li>
        </ul>

      </nav>
    </div>
  );
};

export default Home;
