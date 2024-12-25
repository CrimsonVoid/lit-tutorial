import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  msg: string = 'hello world!';

  override render() {
    return html`
      <p>${this.msg}</p>
      <p>hello from lit!</p>
    `;
  }
}

// declare global {
//   interface HTMLElementTagNameMap {
//     'my-element': MyElement;
//   }
// }
