import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navigation from "./components/Navigation"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Team from "./components/pages/Team"
import Projects from "./components/pages/Projects"
import User from "./components/pages/User"


// need this for React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div>
      <Navigation />
      <Container style={{ paddingTop: "20px" }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/user">
              <Route path=":id" element={<User />} />
            <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
