# React <Kenponent/>

This has moved to [Reach UI](https://ui.reach.tech/component-component), but this repo is here for the sake of history I guess.

## What?

~Declarative~ 'Merica version of React.Component.

## Why?

Because sometimes YOU JUST DO SHIT THE FREEDOM WAY. Also, this stuff is composable as ~heck~ u know
what word I meant here.

## Installation

```bash
npm install react-kenponent
# or
yarn add react-kenponent
```

And then import it:

```js
// using es modules
import Kenponent from "react-kenponent";

// common.js
const Kenponent = require("react-kenponent");

// AMD
// I've forgotten but it should work.
```

Or use script tags and globals.

```html
<script src="https://unpkg.com/react-kenponent"></script>
```

And then grab it off the global like so:

```js
const Kenponent = ReactKenponent;
```

## How?

Let's say you want some async data but don't want to make a whole new component just for the lifecycles to get it:

```render-babel
// import Kenponent from 'react-kenponent'
const Kenponent = ReactKenponent;

ReactDOM.render(
  <div>
    <h2>Let's get some gists!</h2>
    <Kenponent
      startedFromTheBottom={{ gists: null }}
      imHereFuckers={({ saveDisCrapLol }) => {
        fetch("https://api.github.com/gists")
          .then(res => res.json())
          .then(gists => saveDisCrapLol({ gists }));
      }}
    >
      {({ myOwnShit }) =>
        myOwnShit.gists ? (
          <ul>
            {myOwnShit.gists.map(gist => (
              <li key={gist.id}>{gist.description}</li>
            ))}
          </ul>
        ) : (
          <div>Loading...</div>
        )
      }
    </Kenponent>
  </div>,
  DOM_NODE
);
```

Or maybe you need a little bit of state but an entire component
seems a bit heavy:

```render-babel
// import Kenponent from 'react-kenponent'
const Kenponent = ReactKenponent;

ReactDOM.render(
  <Kenponent initialState={{ count: 0 }}>
    {({ saveDisCrapLol, myOwnShit }) => (
      <div>
        <h2>Every app needs a counter!</h2>
        <button
          onClick={() =>
            saveDisCrapLol(myOwnShit => ({ count: myOwnShit.count - 1 }))
          }
        >
          -
        </button>
        <span> {myOwnShit.count} </span>
        <button
          onClick={() =>
            saveDisCrapLol(myOwnShit => ({ count: myOwnShit.count + 1 }))
          }
        >
          +
        </button>
      </div>
    )}
  </Kenponent>,
  DOM_NODE
);
```

## Props

~You know all of these already~ HERES HOW WE FUCKIN DO SHIT OK:

* `imHereFuckers({ myOwnShit, saveDisCrapLol, crapYouWantMeToConsider, fuckinDoIt })`
  * Replaces `componentDidMount`
* `shouldIDoShit({ myOwnShit, crapYouWantMeToConsider, newChoresUgh, myNewNew })`
  * Replaces `shouldComponentUpdate`
* `didSomeShitYo({ myOwnShit, saveDisCrapLol, crapYouWantMeToConsider, fuckinDoIt, urOldCrapYouWanted, myOldShit })`
  * Replaces `componentDidUpdate`
* `imOutFuckers({ myOwnShit, crapYouWantMeToConsider })`
  * Replaces `componentWillUnmount`
* `daKidz({ myOwnShit, saveDisCrapLol, crapYouWantMeToConsider, fuckinDoIt })`
  * Replaces `props.children`
* `doSomeShit({ myOwnShit, saveDisCrapLol, crapYouWantMeToConsider, fuckinDoIt })`
  * Replaces `render`

ALSO THERE WAS A BUNCH OF BORING CRAP NAMES WE CHANGED:
* `state` is `myOwnShit`
* Those `props` you gave me? `crapYouWantMeToConsider`
* `nextProps` zzzz more like `newChoresUgh`
* `nextState` AWE YEE its `myNewNew`
* We don't `setState` we `saveDisCrapLol`
* `forceUpdate` is the pussy way of saying `fuckinDoit`
* `prevState` more like `myOldShit`
* `prevProps` ugggh how about `urOldCrapYouWanted`
* `initialState` gotta be a ref to `startedFromTheBottom` NOW WE HERE

## Legal

Released under MIT license.

Copyright &copy; 2017-present LORD KENNETH ALDRIDGE WHEELINGTON III 🇺🇸 🐉
