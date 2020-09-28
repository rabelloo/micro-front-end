import type { Render } from '@mfe/interface';
import App from './App.svelte';

export const root = document.createElement('div');

let app: App;

export const render: Render = ({ state, setState }) => {
  if (!app) app = new App({ target: root });

  app.$set({
    name: state.name,
    onNameChange: (name: string) => setState({ name }),
  });
};
