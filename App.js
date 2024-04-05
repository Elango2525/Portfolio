import React from 'react';
import Home from './Home';
// import Profile from './Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './Projects';
import Skills from './Skills';
import Ach from './Ach';
// Achievements
// import './styles/App.css';

const App = () => {
  return (
    <div className="app-container">
       <Router>
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/ach" component={Ach} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
