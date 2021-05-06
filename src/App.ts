import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('my-app')
export class App extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = css`
  `;

  render() {
    return html`
      <main>
        ${this.title}
      </main>
    `;
  }
}
