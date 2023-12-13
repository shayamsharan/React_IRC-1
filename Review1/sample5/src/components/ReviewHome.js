
import '../Assests/CSS/ReviewHome.css';

import favicon from '../Assests/Image/favicon.ico';
import img3 from '../Assests/Image/Crew.jpg'
import img2 from '../Assests/Image/Furniture.jpg';
import last from '../Assests/Image/Bedroom.jpg';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <nav>

                <ul className="nav">

                    <li>
                        <img src={img2} className="logo" />
                    </li>
                    <Link to='/home'>                 
                     <li>
                    
                       
                        HOME
                        
                        
                    </li>
                    </Link>

                    <li>
                      
                        CONTACT
                       
                    </li>
<Link to='/signup'>
                    <li>
                        <a href="#" className="same">
                            SIGN UP
                        </a>
                    </li>
                    </Link>
                    <Link to="/login">
                    <li>
                        <a href="#" className="same">
                            LOGIN
                        </a>
                    </li>
                    </Link>
                    <li>
                        <a href="#" className="same">
                            ABOUT US
                        </a>
                    </li>
                </ul>
            </nav>



        </div>


    )
}

export default Home;
