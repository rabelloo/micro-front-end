import { render as renderLitHtml } from 'https://cdn.skypack.dev/lit-html';
import { App } from './app.js';
export const root = document.createElement('div');
export const render = ({ state, setState }) => renderLitHtml(App({
    name: state.name,
    onNameChange: (name) => setState({ name }),
}), root);
//# sourceMappingURL=index.js.map