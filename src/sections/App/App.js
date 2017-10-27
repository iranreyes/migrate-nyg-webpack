import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import loadable from 'react-loadable';

import RotateScreen from '../../components/Rotate/Rotate';
import LoadingComponent from '../../components/LoadingPage/LoadingPage';
import TransitionRoute from '../../util/transitionRoute';
import detect from '../../util/detect';

// Asynchronous sections
const AsyncLanding = loadable({
  loader: () => import('../Landing/Landing'),
  loading: LoadingComponent
});

const AsyncAbout = loadable({
  loader: () => import('../About/About'),
  loading: LoadingComponent
});

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
            <TransitionRoute
              exact
              path="/"
              component={AsyncLanding}
              key="landing"
            />,
            <TransitionRoute
              exact
              path="/about-us"
              component={AsyncAbout}
              key="about"
            />,
            detect.isPhone && <RotateScreen key="rotate" />
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
