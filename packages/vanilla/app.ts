interface Props {
  name: string;
  onNameChange: (name: string) => void;
}

export const App = () => {
  // state
  let count = 0;

  // html
  const h1 = h('h1');
  h1.innerText = 'Vanilla';

  const text = t('Current name is');

  const nameCode = h('code');

  const label = h('label');
  label.innerText = 'Type to change name';

  const input = h('input');
  label.appendChild(input);
  on(input, 'input', () => (countCode.innerText = `${++count}`));

  const p = h('p');
  const countCode = h('code');
  p.appendChild(t('Changed internally'));
  p.appendChild(countCode);
  p.appendChild(t('times'));
  countCode.innerText = `${count}`;

  const fragment = f();

  [h1, text, nameCode, label, p].forEach((node) => fragment.appendChild(node));

  return {
    element: fragment,
    render: ({ name, onNameChange }: Props) => {
      nameCode.innerText = name;
      input.value = name;

      on(input, 'input', () => onNameChange(input.value), { once: true });

      return fragment;
    },
  };
};

const h: typeof document.createElement = (tag: string) =>
  document.createElement(tag);
const t = (text: string) => document.createTextNode(text);
const f = () => document.createDocumentFragment();

const on = (el: Element, ...args: Parameters<typeof el.addEventListener>) =>
  el.addEventListener(...args);
