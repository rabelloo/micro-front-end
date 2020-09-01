import React, { useState } from 'react';
import { render } from 'react-dom';

export const root = document.createElement('div');

const App = () => {
  const [state, setState] = useState('foo');

  return (
    <>
      <h1>React {React.version}</h1>
      Current hook state is
      <code>{state}</code>
      <label>
        Type to change state
        <input
          defaultValue={state}
          onChange={(e) => setState(e.currentTarget.value)}
        />
      </label>
    </>
  );
};

render(<App />, root);
