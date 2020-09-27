import type { Module, Render, State } from '@mfe/interface';

const modules: Record<string, Promise<Module>> = {
  // angular: import('@mfe/angular'),
  litElement: import('@mfe/lit-element'),
  litHtml: import('@mfe/lit-html'),
  react: import('@mfe/react'),
  // svelte: import('@mfe/svelte'),
  vanilla: import('@mfe/vanilla'),
  // vue: import('@mfe/vue'),
};

// shared state example (a store is better of course)
let state: State = { name: 'foo' };
const setState = (newState: State) => {
  state = newState;
  renderers.forEach((render) => render({ state, setState }));
};
const renderers: Render[] = [];

Object.entries(modules).forEach(async ([name, importMFE]) => {
  const { render, root } = await importMFE;

  root.id = name;
  document.body.appendChild(root);

  renderers.push(render);

  render({ state, setState });
});
