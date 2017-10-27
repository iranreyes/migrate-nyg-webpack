import React, { PureComponent } from 'react';
import detect from '../../util/detect';
import RotateIcon from './rotate.svg';
import './Rotate.css';

export default class RotateScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      orientation: detect.orientation
    };
  }

  componentDidMount() {
    if (detect.isAndroid) {
      window.addEventListener(
        'orientationchange',
        this.handleOrientationChange
      );
    } else {
      window.addEventListener('resize', this.handleOrientationChange);
    }
  }

  componentWillUnmount() {
    if (detect.isAndroid) {
      window.removeEventListener(
        'orientationchange',
        this.handleOrientationChange
      );
    } else {
      window.removeEventListener('resize', this.handleOrientationChange);
    }
  }

  handleOrientationChange = () => {
    if (detect.orientation !== this.state.orientation) {
      this.setState({ orientation: detect.orientation });
    }
  };

  render() {
    const isPortrait = this.state.orientation === 'portrait';
    const visible =
      (this.props.portrait && !isPortrait) ||
      (!this.props.portrait && isPortrait);
    const style = {
      visibility: visible ? 'visible' : 'hidden'
    };

    return (
      <div id="rotate" style={style}>
        <div className="container">
          <div className="rotate-icon">
            <img src={RotateIcon} alt="Please rotate your device" />
          </div>
          <p>
            Please rotate your device<br />into portrait mode.
          </p>
        </div>
      </div>
    );
  }
}

RotateScreen.defaultProps = {
  portrait: true
};
