import React from 'react';
import '../Assests/Css/Home.css';
import img1 from '../Assests/Image/Emirates-Logo.png';
import favicon from '../Assests/Image/favicon.ico';
import img3 from '../Assests/Image/Crew.jpg'


const Home = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
          <nav>

              <ul className="nav">

                  <li>  <img src={img1} className="fly" />
                  </li>

                  {/* <button type="submit" className="diff">
      <a href="./First Emirates.html">Home</a>
    </button> */}


                  <li>
                      <a href="#" className="same">
                          HOME
                      </a>
                  </li>
                  <li>
                      <a href="#" className="same">
                          CONTACT
                      </a>
                  </li>
                  <li>
                      <a href="#" className="same">
                          EXPERIENCE
                      </a>
                  </li>
                  <li>
                      <a href="#" className="same">
                          ABOUT US
                      </a>
                  </li>
                  <li>
                      <a href="#" className="same">
                          SIGN UP
                      </a>
                  </li>
                  <li>
                      <a href="#" className="same">
                          LOGIN
                      </a>
                  </li>

                  {/* <button type="submit" className="diff">
      <a href="./Emirates Sig in.html">SIGN UP</a>
    </button>
    <button type="submit" className="diff">
      <a href="./Emirates Login new.html">LOGIN</a>
    </button> */}
              </ul>
          </nav>
          <div>

          </div>
          {/* <img src={img1} className="fly" /> */}

          <div className="text">
              <h1>Welcome to Emirates Airlines</h1>

          </div>
         

        <center><img src={img3}  className="crew"/></center>
          <hr />
          <h2 className="last">© Copyright Emirates 2023</h2>
          <script src="app.js"></script>
      <div>
      </div>
      </div>
  )
}

export default Home;
