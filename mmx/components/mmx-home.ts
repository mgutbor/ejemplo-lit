import { html, css, LitElement, CSSResult, TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('mmx-home')
export class MmxHome extends LitElement
{
  static styles: CSSResult = css`  
  :host {
      font-size: 1.5em;
      color: navy
    }
  `;

  render(): TemplateResult {

    let urlKey: string = document.location.pathname.split("/")[1];

    return html `
      <mmx-page text=${urlKey || "bienvenido"}></mmx-page>
    `;
  }
}