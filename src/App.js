import { Suspense } from "react";
import { Route, Link, Routes } from "react-router-dom";

import './App.css';
import Scene from "./components/Scene";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Suspense fallback={''}>
              <Scene/>
      </Suspense>
    </div>

    //  <nav>
    //      <ul id="navigation">
    //         <Link to="/">Home</Link>
    //         <Link to="/about">About</Link>
    //         <Link to="/contact">Contact</Link>
    //      </ul>
    //  </nav>

    //  <div className="app-content">
    //   <Routes>
    //     <Route path="/" element={<Home/>}></Route>
    //     <Route path="/about" element={<About/>}></Route>
    //     <Route path="/contact" element={<Contact/>}></Route>
    //   </Routes>
    //  </div>

  );
}

export default App;
