export const root = document.createElement('div');

const h1 = document.createElement('h1');
h1.innerText = 'Vanilla';

const text = document.createTextNode('Current state is');

const code = document.createElement('code');

const label = document.createElement('label');
label.innerText = 'Type to change state';

const input = document.createElement('input');
input.addEventListener('input', () => setState(input.value));
label.appendChild(input);

const setState = (state: string) => {
  code.innerText = state;
  input.value = state;
};

setState('foo');

// render
[h1, text, code, label].forEach((node) => root.appendChild(node));
