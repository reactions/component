// import Component from 'react-component'
const Component = ReactComponent.default;

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
          <div>{state.count}</div>
          <button
            onClick={() =>
              setState(state => ({ count: state.count + 1 }))
            }
          >
            +
          </button>
        </div>
      )}
    </Component>
  </div>,
  DOM_NODE
);

// import Component from 'react-component'
const Component = ReactComponent.default;

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
        <div>{state.count}</div>
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
