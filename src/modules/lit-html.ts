import { html, render } from 'lit-html';

export const root = document.createElement('div');

// this is bad, lit-html state should be either:
// 1. Singleton state container (like Redux or Flux)
// 2. Scoped state with hooks (https://github.com/matthewp/haunted)
// but this is just the simplest example
let rootState = 'foo';

const App = (state: string) =>
  html`
    <h1>lit-html</h1>
    Current state is
    <code> ${state} </code>
    <label>
      Type to change state
      <input
        .value=${state}
        @input=${(e: any) => render(App(e.currentTarget.value), root)}
      />
    </label>
  `;

render(App(rootState), root);
