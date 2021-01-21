import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Reward from './components/reward';
import Snowman from './components/Snowman';
import About from './components/About';
import Background from './components/Background';
import Gameinfo from './components/Gameinfo';
import Home from './components/Home';
// import footer from './components/Footer';




function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gameinfo">Game Info</Link>
          </li>
          <li>
            <Link to="/background">My Background</Link>
          </li>
          <li>
            <Link to="/snowman">The Game</Link>
          </li>
          <li>
            <Link to="/reward">Recipes</Link>
          </li>
          {/* <li>
            <Link to="/footer">Footer</Link>
          </li> */}
        </ul>
        <Switch>
          {/* <Route path="/footer">
            <Footer />
          </Route> */}
          <Route path="/reward">
            <Reward />
          </Route>
          <Route path="/snowman">
            <Snowman />
          </Route>
          <Route path="/background">
            <Background />
          </Route>
          <Route path="/gameinfo">
            <Gameinfo />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}


export default App;
