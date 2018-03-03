# React Component ... Component

## What?

Declarative version of React.Component.

## Why?

Because sometimes you want a lifecycle or some state but don't want to create a new component. Also, this stuff is composable as heck.

## Installation

```bash
npm install react-component-component
# or
yarn add react-component-component
```

And then import it:

```js
// using es modules
import Component from "react-component-component";

// common.js
const Component = require("react-component-component");

// AMD
// I've forgotten but it should work.
```

Or use script tags and globals.

```html
<script src="https://unpkg.com/react-component-component"></script>
```

And then grab it off the global like so:

```js
const Component = ReactComponentComponent;
```

## How?

Let's say you want some async data but don't want to make a whole new component just for the lifecycles to get it:

```render-babel
// import Component from 'react-component-component'
const Component = ReactComponentComponent;

ReactDOM.render(
  <div>
    <h2>Let's get some gists!</h2>
    <Component
      initialState={{ gists: null }}
      didMount={({ setState }) => {
        fetch("https://api.github.com/gists")
          .then(res => res.json())
          .then(gists => setState({ gists }));
      }}
    >
      {({ state }) =>
        state.gists ? (
          <ul>
            {state.gists.map(gist => (
              <li key={gist.id}>{gist.description}</li>
            ))}
          </ul>
        ) : (
          <div>Loading...</div>
        )
      }
    </Component>
  </div>,
  DOM_NODE
);
```

Or maybe you need a little bit of state but an entire component
seems a bit heavy:

```render-babel
// import Component from 'react-component-component'
const Component = ReactComponentComponent;

ReactDOM.render(
  <Component initialState={{ count: 0 }}>
    {({ setState, state }) => (
      <div>
        <h2>Every app needs a counter!</h2>
        <button
          onClick={() =>
            setState(state => ({ count: state.count - 1 }))
          }
        >
          -
        </button>
        <span> {state.count} </span>
        <button
          onClick={() =>
            setState(state => ({ count: state.count + 1 }))
          }
        >
          +
        </button>
      </div>
    )}
  </Component>,
  DOM_NODE
);
```

## Props

You know all of these already:

* `didMount({ state, setState, props, forceUpdate })`
* `shouldUpdate({ state, props, nextProps, nextState })`
* `didUpdate({ state, setState, props, forceUpdate, prevProps, prevState })`
* `willUnmount({ state, props })`
* `children({ state, setState, props, forceUpdate })`
* `render({ state, setState, props, forceUpdate })`

## Legal

Released under MIT license.

Copyright &copy; 2017-present Ryan Florence
