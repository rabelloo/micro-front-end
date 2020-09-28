import React from 'https://cdn.skypack.dev/react';
import { render as renderReactDom } from 'https://cdn.skypack.dev/react-dom';
import { App } from './App.js';
export const root = document.createElement('div');
export const render = ({ state, setState }) => renderReactDom(React.createElement(App, { name: state.name, onNameChange: (name) => setState({ name }) }), root);
//# sourceMappingURL=index.js.map