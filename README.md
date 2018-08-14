# Jbarzegar Component

A Fork of ![https://github.com/reactions/component](reactions/component)

## What?

Declarative version of React.Component.
Which also allows users to make "class methods"

## Why?

Because sometimes you want a lifecycle, class methods or some state but don't want to create a new component. Also, this stuff is composable as heck.

## Installation

```bash
npm install @jbarzegar/component
# or
yarn add @jbarzegar/component
```

And then import it:

```js
// using es modules
import Component from "@jbarzegar/component";

// common.js
const Component = require("@jbarzegar/component");

// AMD
// I've forgotten but it should work.
```

Or use script tags and globals.

```html
<script src="https://unpkg.com/@jbarzegar/component"></script>
```

And then grab it off the global like so:

```js
const Component = ReactionsComponent;
```

## How?

Let's say you want some async data but don't want to make a whole new component just for the lifecycles to get it:

```jsx
// import Component from '@jbarzegar/component'
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

```jsx
// import Component from '@reactions/component'
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

Orrr you want to write some functions

```jsx
import Component from '@jbarzegar/Component'

<Component
  initialState={{
    count: 0
  }}
  handlers={{
    increment: ({ setState, state }, ...params) =>
      setState({ count: state.count + 1 }),
    decrement: ({ state, setState }, ...params) =>
      setState({ count: state.count - 1 })
  }}
>
  {({ handlers, state }) => (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handlers.decrement}>-</button>
      <button onClick={handlers.increment}>+</button>
    </div>
  )}
</Component>
```

## Props

You know all of these already:

* `didMount({ state, setState, props, forceUpdate })`
* `shouldUpdate({ state, props, nextProps, nextState })`
* `didUpdate({ state, setState, props, forceUpdate, prevProps, prevState })`
* `willUnmount({ state, props })`
* `children({ state, setState, props, forceUpdate })`
* `render({ state, setState, props, forceUpdate })`
* `handlers({ state, setState, props, forceUpdate }, ...params)`

### Some notes on `handlers`

It must be an object

## Legal

Released under MIT license.

Copyright &copy; 2017-present Ryan Florence
