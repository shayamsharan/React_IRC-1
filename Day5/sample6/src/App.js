import logo from './logo.svg';
// import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/home' element={<Home/>}></Route>

      <Route path='/' element={<Nav/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
