import { css, html, LitElement } from 'lit-element';

export const root = document.createElement('div');
root.innerHTML = '<lit-app><lit-app>';

class App extends LitElement {
  // not using property() because decorators are finicky in Parcel 2 still
  // using this.requestUpdate() instead for simplicity
  state = 'foo';

  // since this is a custom element with shadow DOM,
  // styles have to be defined in it, won't inherit from document
  static get styles() {
    return css`
      h1 {
        margin-top: 0;
      }

      code {
        background-color: #eee;
        margin-left: 8px;
        padding: 8px;
      }

      label {
        display: block;
        margin-top: 16px;
      }

      input {
        display: block;
        margin-top: 4px;
        padding: 8px;
      }
    `;
  }

  render() {
    return html`<h1>Lit Element</h1>
      Current state is
      <code>${this.state}</code>
      <label>
        Type to change state
        <input
          .value=${this.state}
          @input=${(e: any) => {
            this.state = e.currentTarget.value;
            this.requestUpdate();
          }}
        />
      </label>`;
  }
}

customElements.define('lit-app', App);
