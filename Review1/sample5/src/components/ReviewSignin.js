import'../Assests/CSS/ReviewSignin.css'
// import img3 from '../Assests/Image/Sofa.jpg'
import final from '../Assests/Image/Furniture.jpg';

const Signin = () => {
    return (
    
<div>
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
    <div class="main">
      <div class="container1">
      <div class="logo">
      </div>
        <div class="first">
          <h1>Hey there,</h1>
          <p class="sub">Enter your email and password to login</p>
        </div>
        <form name="form2" method="post" action="#"  class="form-control" onsubmit="register()">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Enter your name" name="username" />
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" name="Email" />
          
          <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" name="password" />
         

          
            
          

         <button class="enter" type="submit" >Register</button >
          
        
        </form>
      </div>
      
      {/* <div class="second">
        <img src="https://images.furnituredealer.net/img/collections/best_home_furnishings/emeline_custom-lss-b4.jpg"  className="gang"/>
        
      </div> */}
  </div>
  </div>
    // width="100%" height="100%"

   )
   }
   export default Signin;