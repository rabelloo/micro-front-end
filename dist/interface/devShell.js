import './index.css';
// shared state example (a store is better of course)
let state = { name: 'foo' };
const setState = (newState) => {
    state = newState;
    renderers.forEach((render) => render({ state, setState }));
};
const renderers = [];
export async function devShell(...mfeImports) {
    mfeImports.forEach(async (mfeImport) => {
        const { render, root } = await mfeImport;
        document.body.appendChild(root);
        renderers.push(render);
        render({ state, setState });
    });
}
//# sourceMappingURL=devShell.js.map