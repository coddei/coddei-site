import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './views/home';
import Navbar from './components/navbar';
import DiscordPage from './views/discord';
import Sobre from './views/sobre';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Route exact path="/" component={Home}/>
        <Route exact path="/discord" component={DiscordPage}/>
        <Route exact path="/sobre" component={Sobre}/>
      </Router>
    </div>
  );
}

export default App;
