import type { Render } from '@mfe/interface';

export const root = document.createElement('mfe-angular');

let onNameChange: (name: string) => void;

export const render: Render = async ({ state, setState }) => {
  if (!root.children.length) {
    import('./mount');

    root.addEventListener('nameChange', (evt: NameChangeEvent) =>
      onNameChange(evt.detail)
    );
  }

  root.name = state.name;
  onNameChange = (name) => setState({ name });
};

type NameChangeEvent = Event & { detail: string };
