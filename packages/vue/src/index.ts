import type { Render } from '@mfe/interface';
import { createApp, h, reactive } from 'vue';
import App from './App.vue';

export const root = document.createElement('div');

let props: Props;

interface Props {
  name: string;
  onNameChange: (name: string) => void;
}

export const render: Render = ({ state, setState }) => {
  if (!props) {
    props = reactive({
      name: '',
      onNameChange: (name: string) => {
        props.name = name;
      },
    });

    createApp({
      render: () => h(App, props),
    }).mount(root);
  }

  props.name = state.name;
  props.onNameChange = (name: string) => setState({ name });
};
