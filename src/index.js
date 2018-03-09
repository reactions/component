import React from 'react';
import PropTypes from 'prop-types';

class Component extends React.Component {
  static propTypes = {
    initialState: PropTypes.object,
    willMount: PropTypes.func,
    didMount: PropTypes.func,
    willUnmount: PropTypes.func,
    shouldUpdate: PropTypes.func,
    didUpdate: PropTypes.func,
    render: PropTypes.func,
    children: PropTypes.func
  };
  
  state = this.props.initialState;
  _setState = (...args) => this.setState(...args);g
  _forceUpdate = (...args) => this.forceUpdate(...args);

  getArgs() {
    const {state, props, _setState: setState, _forceUpdate: forceUpdate} = this;
    return {
      state,
      props,
      setState,
      forceUpdate,
    };
  }

  componentWillMount() {
    if (this.props.willMount) this.props.willMount(this.getArgs());
  }

  componentDidMount() {
    if (this.props.didMount) this.props.didMount(this.getArgs());
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.shouldUpdate)
      return this.props.shouldUpdate({
        props: this.props,
        state: this.state,
        nextProps,
        nextState,
      });
    else return true;
  }

  componentWillUnmount() {
    if (this.props.willUnmount)
      this.props.willUnmount({
        state: this.state,
        props: this.props,
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.didUpdate)
      this.props.didUpdate(
        Object.assign(this.getArgs(), {
          prevProps,
          prevState,
        }),
      );
  }

  render() {
    const {children, render} = this.props;
    return children
      ? typeof children === 'function' ? children(this.getArgs()) : children
      : render ? render(this.getArgs()) : null;
  }
}

export default Component;
