const modules = {
    litElement: import('../lit-element/index.js'),
    litHtml: import('../lit-html/index.js'),
    react: import('../react/index.js'),
    vanilla: import('../vanilla/index.js'),
};
// WIP : modules.angular = import('../angular/index.js');
modules.svelte = import('../svelte/index.js');
modules.vue = import('../vue/index.js');
// the above only work after compiled, they have their own build processes.
// comment is removed by scripts/replace-imports.
// shared state example (a store is better of course)
let state = { name: 'foo' };
const setState = (newState) => {
    state = newState;
    renderers.forEach((render) => render({ state, setState }));
};
const renderers = [];
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
const setMetric = (el, name, ms) => { var _a; return (_a = el.style) === null || _a === void 0 ? void 0 : _a.setProperty(`--${name}`, `'${Math.round(ms)}ms'`); };
export {};
//# sourceMappingURL=shell.js.map