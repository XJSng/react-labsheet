import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import About from "./pages/About";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import FormSubmitted from "./pages/FormSubmitted";

function App() {
  return (
    <div className="container">
      <Router>
        <nav className="navbar navbar-expand-sm bg-light">

          <div className="container-fluid">

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Homepage</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/form-submitted" element={<FormSubmitted />} />
        </Routes>
        <footer>
          (c) 2024
        </footer>
      </Router>
    </div>
  );
}

export default App;
