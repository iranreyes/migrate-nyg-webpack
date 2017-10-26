import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './Landing.css';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillEnter(done) {
    done();
  }
  componentWillLeave(done) {
    done();
  }

  render() {
    return (
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
  }
}

const mapStateToProps = state => ({
  app: state.app
});

export default connect(mapStateToProps, null)(Landing);
