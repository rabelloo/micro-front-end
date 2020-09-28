import { html, render as renderLitHtml } from 'https://cdn.skypack.dev/lit-html';
import './app.js';
export const root = document.createElement('div');
export const render = ({ state, setState }) => renderLitHtml(html `<lit-app
      name=${state.name}
      @name-change=${({ detail: { name } }) => setState({ name })}
    />`, root);
//# sourceMappingURL=index.js.map