export interface Module {
  render: (props: Readonly<Props>) => void;
  root: Element;
}

export interface Props {
  state: Readonly<State>;
  setState: (state: Readonly<State>) => void;
}

export type Render = (props: Props) => void;

export interface State {
  name: string;
}
