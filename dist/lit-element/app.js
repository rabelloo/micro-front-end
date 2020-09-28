var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, html, internalProperty, LitElement, property, } from 'https://cdn.skypack.dev/lit-element';
let App = class App extends LitElement {
    constructor() {
        super(...arguments);
        this.count = 0;
    }
    // no shadow DOM so that styles bleed through
    createRenderRoot() {
        return this;
    }
    onNameChange(name) {
        this.dispatchEvent(new CustomEvent('name-change', { detail: { name } }));
    }
    render() {
        return html `<h1>Lit Element</h1>
      Current name is <code>${this.name}</code>
      <label>
        Type to change name
        <input
          .value=${this.name}
          @input=${(e) => {
            const input = e.currentTarget;
            this.count++;
            this.onNameChange(input.value);
        }}
        />
      </label>
      <p>Changed internally <code>${this.count}</code> times</p>`;
    }
};
__decorate([
    internalProperty()
], App.prototype, "count", void 0);
__decorate([
    property()
], App.prototype, "name", void 0);
App = __decorate([
    customElement('lit-app')
], App);
export { App };
//# sourceMappingURL=app.js.map