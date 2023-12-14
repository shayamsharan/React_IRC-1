import'../Assests/CSS/ReviewLogin.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const Login = () => {



    const navigate = useNavigate();
  const [data,setData]=useState({

    email:'',
    password:''


  })

const logx=(e)=>
{
  e.preventDefault();
  const a=localStorage.getItem('email');
  const b=localStorage.getItem('pass');
  if(a===data.email && b===data.password)
  {
      
          navigate('/dashboard');
         
  }
  else
      alert('Invalid Credentials');
}

  const HandleChange=(e)=>
  {
      setData({...data,[e.target.id]:e.target.value})

  }
    return (
    
<div>
      <nav>

      <ul className="nav">

     

         


        
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
        <form class="form-control" onSubmit={logx}>
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" name="Email"onChange={HandleChange} />
          
          <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" name="password"onChange={HandleChange} />
         

          
            
          

         <button class="enter" type="submit" >Login</button >
          
        
        </form>
      </div>
      
      
  </div>
  </div>
    // width="100%" height="100%"

   )
   }
   export default Login;