import React from "react";
import invariant from "invariant";

class Component extends React.Component {
  state = this.props.initialState;

  _setState = (...args) => this.setState(...args);

  _forceUpdate = (...args) => this.forceUpdate(...args);

  getArgs() {
    const {
      state,
      props,
      _setState: setState,
      _forceUpdate: forceUpdate
    } = this;
    return {
      state,
      props,
      setState,
      forceUpdate
    };
  }

  componentDidMount() {
    if (this.props.didMount)
      this.props.didMount(this.getArgs());
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.shouldUpdate)
      return this.props.shouldUpdate({
        props: this.props,
        state: this.state,
        nextProps,
        nextState
      });
    else return true;
  }

  componentWillUnmount() {
    if (this.props.willUnmount)
      this.props.willUnmount({
        state: this.state,
        props: this.props
      });
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
    invariant(
      !this.props.willMount,
      "<Component> Please use `didMount` instead of `willMount`."
    );
  }

  componentWillReceiveProps(nextProps, nextState) {
    invariant(
      !this.props.willReceiveProps,
      "<Component> Please use `didUpdate` instead of `willReceiveProps`."
    );
  }

  componentWillUpdate(nextProps, nextState) {
    invariant(
      !this.props.willUpdate,
      "<Component> Please use `didUpdate` instead of `willReceiveProps`."
    );
  }
}

export default Component;
