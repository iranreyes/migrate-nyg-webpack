import React from 'react';

const LoadingComponent = props => {
  // Handle the loading state
  if (props.pastDelay) {
    return <div>Loading...</div>;
  } else if (props.error) {
    // Handle the error state
    return <div>Sorry, there was a problem loading the page.</div>;
  } else if (props.timedOut) {
    // Handle the timeout
    return <div>Loading the page is taking too long, try refreshing.</div>;
  } else {
    return null;
  }
};

export default LoadingComponent;
