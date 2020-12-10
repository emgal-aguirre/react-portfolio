import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
      </div>
    </Router>
  );
}

export default App;
