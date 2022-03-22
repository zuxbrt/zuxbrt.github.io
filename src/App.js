import { Route, Link, Routes } from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Box from "./components/Box";

function App() {
  return (
    <div className="App">
     <nav>
         <ul id="navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
         </ul>
     </nav>

     <div className="app-content">
      {/* <Box/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
     </div>

    </div>
  );
}

export default App;
