import { useState } from 'react';

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const toggle = () => {
    setVisible(!visible);
  };

  const Login = () => {
    alert(data.username + ' ' + data.password);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <div className="navbar">
        <div className="navtitle">Hello World</div>
        <ul className="navlinks">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li onClick={toggle}>Login</li>
        </ul>
      </div>

      {visible ? (
        <div className="card-wrapper">
          <div className="">
            <h2 className="auth-title">Login</h2>
            <form className="auth-container h-30v shadow" onSubmit={Login}>
              <input
                type="text"name=""id="username"placeholder="Username"className="auth-input"onChange={handleChange}/>
              <input type="password"name=""id="password"placeholder="Password"className="password"onChange={handleChange}/>
              <span className="btn-container">
                <input type="submit" value="Login"  />
                <button className="cancel-btn w-50" onClick={toggle}>
                  Cancel
                </button>
              </span>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;
