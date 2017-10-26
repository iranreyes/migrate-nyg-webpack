import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TransitionRoute from '../../util/transitionRoute';
import Landing from '../Landing/Landing';
import About from '../About/About';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Route
          render={({ location }) => [
            <header key="header">
              <Link to="/">Landing</Link>
              <Link to="/about-us">About</Link>
            </header>,
            <TransitionRoute exact path="/" component={Landing} key="landing" />,
            <TransitionRoute exact path="/about-us" component={About} key="about" />
          ]}
        />
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    app: state.app
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

App.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
