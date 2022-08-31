import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navigation from "./components/Navigation"
import About from "./components/pages/About"
import Team from "./components/pages/Team"
import Portfolio from "./components/pages/Portfolio"
import User from "./components/pages/Resume"
import Footer from "./components/pages/Footer"



// need this for React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div>
      <Navigation />
      <Container style={{ paddingTop: "20px" }}>
        <Router>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/resume">
              <Route path=":id" element={<User />} />
            <Route path="*" element={<Portfolio />} />
            </Route>
          </Routes>
        </Router>
      </Container>
      { <Footer />}
    </div>
  );
}

export default App;
