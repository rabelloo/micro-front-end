const litElement = () => import('./modules/lit-element');
const litHtml = () => import('./modules/lit-html');
const react = () => import('./modules/react');
const vanilla = () => import('./modules/vanilla');

[litElement, litHtml, react, vanilla].forEach(async (renderMFE) => {
  const { root } = await renderMFE();

  root.id = renderMFE.name;
  root.className = 'mfe-module';
  document.body.appendChild(root);
});
