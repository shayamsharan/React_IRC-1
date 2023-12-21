import ClassComponent from "./Components/ClassComponent";


function App() {
  return (
    <div className="App">
  <Routes>
  <Route path="/" element={<div>Home Page</div>} />
  <Route path="/about" element={<div>About Us Page</div>} />
  <Route path="/contact" element={<div>Contact Page</div>} />
</Routes>

    </div>
  );
}

export default App;
