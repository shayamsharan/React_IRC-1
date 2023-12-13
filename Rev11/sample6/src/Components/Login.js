import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Home = () => (
  <div>
    <h1>Welcome to the Home Page!</h1>
    <Link to="/login">Logout</Link>
  </div>
);

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here (e.g., check credentials)
    // For simplicity, just call onLogin if login is successful
    onLogin();
  };

  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here (e.g., store user data)
    // For simplicity, just call onSignup if signup is successful
    onSignup();
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <label htmlFor="signupUsername">Username:</label>
      <input
        type="text"
        id="signupUsername"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <label htmlFor="signupPassword">Password:</label>
      <input
        type="password"
        id="signupPassword"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleSignup = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <div className="container">
        <Route path="/" exact render={() => (loggedIn ? <Home /> : <Login onLogin={handleLogin} />)} />
        <Route path="/login" render={() => (loggedIn ? <Home /> : <Login onLogin={handleLogin} />)} />
        <Route path="/signup" render={() => (loggedIn ? <Home /> : <Signup onSignup={handleSignup} />)} />
      </div>
    </Router>
  );
};

export default App;