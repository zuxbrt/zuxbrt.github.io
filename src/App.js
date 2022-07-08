import { Suspense } from "react";
import { Route, Link, Routes } from "react-router-dom";

import './App.scss';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Index from "./pages/Index";

function App() {
  return (
      <Suspense fallback={'loading'}>

        <div className="app__content">
          <nav id="navigation">
              <Link to="/" className="header__link"> {'</>'} </Link>
              <Link to="/about" className="header__link">About</Link>
              <Link to="/contact" className="header__link">Contact</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Index/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>

        </div>

      </Suspense>

  );
}

export default App;
