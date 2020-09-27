import React, { useState, version } from 'react';

interface Props {
  name: string;
  onNameChange: (name: string) => void;
}

export const App = ({ name, onNameChange }: Props) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React {version}</h1>
      Current name is <code>{name}</code>
      <label>
        Type to change name
        <input
          value={name}
          onChange={(e) => {
            const input = e.currentTarget as HTMLInputElement;
            setCount(count + 1);
            onNameChange(input.value);
          }}
        />
      </label>
      <p>
        Changed internally <code>{count}</code> times
      </p>
    </>
  );
};
