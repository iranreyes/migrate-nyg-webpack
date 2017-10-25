import React from 'react';
import logo from './logo.svg';
import './Landing.css';

const Landing = () => (
  <div className="Landing">
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <h1 className="title">Welcome to React</h1>
    </header>
    <p className="intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default Landing;
