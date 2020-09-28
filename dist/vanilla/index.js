import { App } from './app.js';
export const root = document.createElement('div');
const { element, render: renderApp } = App();
root.appendChild(element);
export const render = ({ state, setState }) => renderApp({ name: state.name, onNameChange: (name) => setState({ name }) });
//# sourceMappingURL=index.js.map