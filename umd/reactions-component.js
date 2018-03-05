(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global.ReactionsComponent = factory(global.React));
}(this, (function (React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Component = function (_React$Component) {
  inherits(Component, _React$Component);

  function Component() {
    var _temp, _this, _ret;

    classCallCheck(this, Component);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), possibleConstructorReturn(_this, _ret);
  }

  Component.prototype.getArgs = function getArgs() {
    var state = this.state,
        props = this.props,
        setState = this._setState,
        forceUpdate = this._forceUpdate;

    return {
      state: state,
      props: props,
      setState: setState,
      forceUpdate: forceUpdate
    };
  };

  Component.prototype.componentDidMount = function componentDidMount() {
    if (this.props.didMount) this.props.didMount(this.getArgs());
  };

  Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props.shouldUpdate) return this.props.shouldUpdate({
      props: this.props,
      state: this.state,
      nextProps: nextProps,
      nextState: nextState
    });else return true;
  };

  Component.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.props.willUnmount) this.props.willUnmount({
      state: this.state,
      props: this.props
    });
  };

  Component.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props.didUpdate) this.props.didUpdate(Object.assign(this.getArgs(), {
      prevProps: prevProps,
      prevState: prevState
    }));
  };

  Component.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        render = _props.render;

    return children ? typeof children === 'function' ? children(this.getArgs()) : children : render ? render(this.getArgs()) : null;
  };

  return Component;
}(React.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = this.props.initialState;

  this._setState = function () {
    return _this2.setState.apply(_this2, arguments);
  };

  this._forceUpdate = function () {
    return _this2.forceUpdate.apply(_this2, arguments);
  };
};

return Component;

})));
