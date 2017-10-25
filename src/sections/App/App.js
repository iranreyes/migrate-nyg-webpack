import React from 'react';
import { Route, Link } from 'react-router-dom';
import Landing from '../Landing/Landing';
import About from '../About/About';

const App = () => (
  <div>
    <header>
      <Link to="/">Landing</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Landing} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
