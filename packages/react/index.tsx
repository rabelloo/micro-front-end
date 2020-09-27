import type { Render } from '@mfe/interface';
import React from 'react';
import { render as renderReactDom } from 'react-dom';
import { App } from './App';

export const root = document.createElement('div');

export const render: Render = ({ state, setState }) =>
  renderReactDom(
    <App name={state.name} onNameChange={(name) => setState({ name })} />,
    root
  );
