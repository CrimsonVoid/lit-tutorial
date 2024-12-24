
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('my-element')
export class MyElement extends LitElement {
  @property({ type: String })
  greeting = 'there';

  render() {
    return html`
      <p>hello ${this.greeting}!</p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
