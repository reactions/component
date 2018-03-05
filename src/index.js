import React from 'react';

class Component extends React.Component {
  state = this.props.initialState;
  _setState = (...args) => this.setState(...args);
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
