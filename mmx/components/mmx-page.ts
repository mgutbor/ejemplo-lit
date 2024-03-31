import { html, css, LitElement, CSSResult, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

const Pages = {
  bienvenido: html`Bienvenido a la <strong>pagina</strong> <span style="color: lime">inicial</span>`,
  segunda: html`Esta es la pagina secundaria`,
}

@customElement("mmx-page")
export class MmxPage extends LitElement {
  static styles: CSSResult = css`
    :host {
      color: #fa0000;
    }

    .yellow {
      background-color: #ffff00;
    }
  `;

  @property() text:string = "bienvenido";

  render(): TemplateResult {
    return html`
      ${Pages[this.text]}
    `;
  }
}
