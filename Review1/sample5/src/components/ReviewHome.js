
import '../Assests/CSS/ReviewHome.css';
// import img1 from '../Assests/Image/Emirates-Logo.png';
import favicon from '../Assests/Image/favicon.ico';
import img3 from '../Assests/Image/Crew.jpg'
import final from '../Assests/Image/Furniture.jpg';
import last from '../Assests/Image/Bedroom.jpg';


const Home = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
          <nav>

              <ul className="nav">

             

                  {/* <button type="submit" className="diff">
      <a href="./First Emirates.html">Home</a>
    </button> */}


                  <li>
                  <img src={final}  className="logo"/>
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
                  </ul>
</nav>
                  {/* <div className='bg'>
                    <img src={last}a/>
                  </div> */}

</div>
  
     
  )
}

export default Home;
