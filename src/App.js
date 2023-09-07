import { Suspense } from "react";
import { Route, Routes, NavLink } from "react-router-dom";

import './App.scss';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Index from "./pages/Index";

function App() {
  return (
      <Suspense fallback={'loading'}>

        <div className="app__content">
            <nav id="navigation">
                <NavLink to="/about" className="header__link">About</NavLink>
                <NavLink to="/" className="header__link middle"> {'</>'} </NavLink>
                <NavLink to="/contact" className="header__link">Contact</NavLink>
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
