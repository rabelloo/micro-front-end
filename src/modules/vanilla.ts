const el = document.createElement;
const t = document.createTextNode;

export const root = el('div');

const h1 = el('h1');
h1.innerText = 'Vanilla';

const text = t('Current state is');

const code = el('code');

const label = el('label');
label.innerText = 'Type to change state';

const input = el('input');
input.addEventListener('input', () => setState(input.value));
label.appendChild(input);

const setState = (state: string) => {
  code.innerText = state;
  input.value = state;
};

setState('foo');

// render
[h1, text, code, label].forEach((node) => root.appendChild(node));
