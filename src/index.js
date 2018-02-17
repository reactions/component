import React from "react";

class Component extends React.Component {
  state = this.props.initialState;

  _setState = (...args) => this.setState(...args);

  _forceUpdate = (...args) => this.forceUpdate(...args);

  getArgs() {
    const { state, props } = this;
    return {
      state,
      props,
      setState: this._setState,
      forceUpdate: this._forceUpdate
    };
  }

  componentDidMount() {
    if (this.props.didMount)
      this.props.didMount(this.getArgs());
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.shouldUpdate)
      return this.props.shouldUpdate({
        ...this.getArgs(),
        nextProps,
        nextState
      });
    else return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.didUpdate)
      this.props.didUpdate({
        ...this.getArgs(),
        prevProps,
        prevState
      });
  }

  render() {
    if (this.props.children) {
      return this.props.children(this.getArgs());
    } else if (this.props.render) {
      return this.props.render(this.getArgs());
    } else {
      return null;
    }
  }

  // Fiber collateral damage starts here...

  componentWillMount() {
    if (this.props.willMount) {
      throw new Error(
        "Very sorry, but this lifecycle hook is bad news, use `didMount` instead."
      );
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (this.props.willReceiveProps) {
      throw new Error(
        "Very sorry, but this lifecycle hook is bad news for the future of React, if you’re trying to cache state, consider using a lodash.memoize, otherwise you want `didUpdate`."
      );
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.willReceiveProps) {
      throw new Error(
        "Very sorry, but this lifecycle hook is bad news for the future of React, please use `didUpdate`."
      );
    }
  }
}

export default Component;
