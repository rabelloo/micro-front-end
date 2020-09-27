import type { Render } from '@mfe/interface';
import { html, render as renderLitHtml } from 'lit-html';
import './app';

export const root = document.createElement('div');

export const render: Render = ({ state, setState }) =>
  renderLitHtml(
    html`<lit-app
      name=${state.name}
      @name-change=${({ detail: { name } }: NameChangeEvent) =>
        setState({ name })}
    />`,
    root
  );

interface NameChangeEvent {
  detail: { name: string };
}
