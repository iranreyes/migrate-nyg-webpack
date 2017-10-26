import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillEnter(done) {
    console.log('enter');
    done();
  }
  componentWillLeave(done) {
    console.log('leave');
    done();
  }

  render() {
    return <div className="About">About</div>;
  }
}

export default About;
