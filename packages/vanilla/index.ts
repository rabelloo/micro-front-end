import { Render } from '@mfe/interface';
import { App } from './app';

export const root = document.createElement('div');

const { element, render: renderApp } = App();
root.appendChild(element);

export const render: Render = ({ state, setState }) =>
  renderApp({ name: state.name, onNameChange: (name) => setState({ name }) });
