import type { Module, Render, State } from '@mfe/interface';

const modules: Record<string, Promise<Module>> = {
  litElement: import('@mfe/lit-element'),
  litHtml: import('@mfe/lit-html'),
  react: import('@mfe/react'),
  vanilla: import('@mfe/vanilla'),
};

// WIP : modules.angular = import('@mfe/angular');
// PROD: modules.svelte = import('@mfe/svelte');
// PROD: modules.vue = import('@mfe/vue');

// the above only work after compiled, they have their own build processes.
// comment is removed by scripts/replace-imports.

// shared state example (a store is better of course)
let state: State = { name: 'foo' };
const setState = (newState: State) => {
  state = newState;
  renderers.forEach((render) => render({ state, setState }));
};
const renderers: Render[] = [];

Object.entries(modules).forEach(async ([name, importMFE]) => {
  const start = performance.now();
  const { render, root } = await importMFE;
  const endLoad = performance.now();

  root.id = name;
  document.body.appendChild(root);

  renderers.push(render);

  render({ state, setState });
  const endRender = performance.now();

  setMetric(root, 'load', endLoad - start);
  setMetric(root, 'render', endRender - endLoad);
});

const setMetric = (el: Element, name: string, ms: number) =>
  (el as HTMLElement).style?.setProperty(`--${name}`, `'${Math.round(ms)}ms'`);
