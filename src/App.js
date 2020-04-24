import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './views/home';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Route exact path="/" component={Home}/>
      </Router>
    </div>
  );
}

export default App;
