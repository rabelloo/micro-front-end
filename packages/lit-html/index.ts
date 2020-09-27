import type { Render } from '@mfe/interface';
import { render as renderLitHtml } from 'lit-html';
import { App } from './app';

export const root = document.createElement('div');

export const render: Render = ({ state, setState }) =>
  renderLitHtml(
    App({
      name: state.name,
      onNameChange: (name: string) => setState({ name }),
    }),
    root
  );
