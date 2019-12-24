import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//Component
import Header from "./Components/Header";


// Pages 
import home from './Pages/home'
import blog from './Pages/blog'
import project from './Pages/project'

// Css
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={home}/>
          <Route exact path="/blog" component={blog}/>
          <Route exact path="/project" component={project}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
