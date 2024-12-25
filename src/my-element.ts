import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  checked = false;

  override render() {
    return html`
      <div>
        <input type="text" ?disabled="${!this.checked}" value="Hello there." />
      </div>
      <label>
        <input type="checkbox" @change=${this.setChecked} /> Enable editing
      </label>
    `;
  }

  setChecked(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
  }
}

// declare global {
//   interface HTMLElementTagNameMap {
//     'my-element': MyElement;
//   }
// }
