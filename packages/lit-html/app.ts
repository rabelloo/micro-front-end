import { useState, virtual } from 'haunted';
import { html } from 'lit-html';

interface Props {
  name: string;
  onNameChange: (name: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const App = virtual(_App as any) as any as typeof _App;

function _App({ name, onNameChange }: Props) {
  const [count, setCount] = useState(0);

  return html`
    <h1>Lit HTML</h1>
    Current name is <code>${name}</code>
    <label>
      Type to change name
      <input
        .value=${name}
        @input=${(e: KeyboardEvent) => {
          const input = e.currentTarget as HTMLInputElement;
          setCount(count + 1);
          onNameChange(input.value);
        }}
      />
    </label>
    <p>Changed internally <code>${count}</code> times</p>
  `;
}
