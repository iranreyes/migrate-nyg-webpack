import React from 'react';

class About extends React.Component {
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
    return <div className="About">About</div>;
  }
}

export default About;
