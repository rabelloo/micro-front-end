import {
  customElement,
  html,
  internalProperty,
  LitElement,
  property,
} from 'lit-element';

@customElement('lit-app')
export class App extends LitElement {
  @internalProperty()
  count = 0;

  @property()
  name!: string;

  // no shadow DOM so that styles bleed through
  createRenderRoot() {
    return this;
  }

  onNameChange(name: string) {
    this.dispatchEvent(new CustomEvent('name-change', { detail: { name } }));
  }

  render() {
    return html`<h1>Lit Element</h1>
      Current name is <code>${this.name}</code>
      <label>
        Type to change name
        <input
          .value=${this.name}
          @input=${(e: KeyboardEvent) => {
            const input = e.currentTarget as HTMLInputElement;
            this.count++;
            this.onNameChange(input.value);
          }}
        />
      </label>
      <p>Changed internally <code>${this.count}</code> times</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-app': App;
  }
}
