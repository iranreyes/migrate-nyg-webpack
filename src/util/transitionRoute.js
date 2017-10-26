import React from 'react';
import { Route } from 'react-router-dom';
import TransitionGroup from 'react-addons-transition-group';
import classnames from 'classnames';

const isEmptyChildren = children => React.Children.count(children) === 0;

class TransitionRoute extends Route {
  componentWillAppear(cb) {
    if (this.childRef && this.childRef.componentWillAppear) {
      this.childRef.componentWillAppear(cb);
    } else {
      cb();
    }
  }

  componentWillEnter(cb) {
    if (this.childRef && this.childRef.componentWillEnter) {
      this.childRef.componentWillEnter(cb);
    } else {
      cb();
    }
  }

  componentWillLeave(cb) {
    if (this.childRef && this.childRef.componentWillLeave) {
      this.childRef.componentWillLeave(cb);
    } else {
      cb();
    }
  }

  renderChild = () => {
    const { match } = this.state;
    const { children, component, render } = this.props;
    const { history, route, staticContext } = this.context.router;
    const location = this.props.location || route.location;
    const props = {
      match,
      location,
      history,
      staticContext,
      ref: ref => {
        this.childRef = ref;
      },
      ...('keyOn' in this.props ? { key: this.props.keyOn({ match, location, route }) } : {})
    };

    return component
      ? match // component prop gets first priority, only called if there's a match
        ? React.createElement(component, props)
        : null
      : render
        ? match // render prop is next, only called if there's a match
          ? render(props)
          : null
        : children
          ? typeof children === 'function' // children come last, always called
            ? children(props)
            : !isEmptyChildren(children) ? React.Children.only(children) : null
          : null;
  };

  render() {
    const child = this.renderChild();

    return (
      <TransitionGroup
        className={classnames(this.props.className, { 'active-route': child })}
        component={this.props.wrapperComponent || 'div'}
      >
        {child}
      </TransitionGroup>
    );
  }
}

export default TransitionRoute;
