import './index.css';
import type { Module, Render, State } from './interface';

// shared state example (a store is better of course)
let state: State = { name: 'foo' };
const setState = (newState: State) => {
  state = newState;
  renderers.forEach((render) => render({ state, setState }));
};
const renderers: Render[] = [];

export async function devShell(...mfeImports: Promise<Module>[]) {
  mfeImports.forEach(async (mfeImport) => {
    const { render, root } = await mfeImport;

    document.body.appendChild(root);

    renderers.push(render);

    render({ state, setState });
  });
}
