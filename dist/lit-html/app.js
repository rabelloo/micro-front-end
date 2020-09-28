import { useState, virtual } from 'https://cdn.skypack.dev/haunted';
import { html } from 'https://cdn.skypack.dev/lit-html';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const App = virtual(_App);
function _App({ name, onNameChange }) {
    const [count, setCount] = useState(0);
    return html `
    <h1>Lit HTML</h1>
    Current name is <code>${name}</code>
    <label>
      Type to change name
      <input
        .value=${name}
        @input=${(e) => {
        const input = e.currentTarget;
        setCount(count + 1);
        onNameChange(input.value);
    }}
      />
    </label>
    <p>Changed internally <code>${count}</code> times</p>
  `;
}
//# sourceMappingURL=app.js.map