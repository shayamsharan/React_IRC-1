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

             

                  {/* <button type="submit" className="diff">
      <a href="./First Emirates.html">Home</a>
    </button> */}


                  <li>
                  <img src={img1}  className="logo"/>
                  </li>
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
                          SIGN UP
                      </a>
                  </li>
                  <li>
                      <a href="#" className="same">
                          LOGIN
                      </a>
                  </li>
                  <li>
                      <a href="#" className="same">
                          ABOUT US
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
        

          <div className="text">
              <h1>Welcome to Emirates</h1>

          </div>
          <div className="single">
<a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank">
  <div class="card">
    <div class="wrapper">
      <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" class="cover-image" />
    </div>
    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title" />
    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" class="character" />
  </div>
</a>

<a href="https://www.mythrillfiction.com/force-mage" alt="Mythrill" target="_blank">
  <div class="card">
    <div class="wrapper">
      <img src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg" class="cover-image" />
    </div>
    <img src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png" class="title" />
    <img src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp" class="character" />
  </div>
</a>
</div>

        {/* <center><img src={img3}  className="crew"/></center> */}
          <hr />
          <h2 className="last">© Copyright Emirates 2023</h2>
          <script src="app.js"></script>
      <div>
      </div>
      </div>
  )
}

export default Home;
