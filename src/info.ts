import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("dt-info")
export class Info extends LitElement {
  @property()
  partsCount = 0;

  @property()
  partWidth = 0;

  @property()
  pinWidth = 0;

  @property()
  tailsCount = 0;

  @property()
  tailWidth = 0;

  @property()
  angle = 0;

  @property()
  tailMarkOffset = 0;

  render() {
    return html`
      <div>Parts: ${this.partsCount} × ${this.partWidth.toFixed(1)} mm</div>

      <div>
        Dovetails: ${this.tailsCount} × ${Math.round(this.tailWidth)} mm
        <span class="unrounded">(${this.tailWidth.toFixed(1)} mm)</span>
      </div>

      <div>
        Pins: ${Math.round(this.pinWidth)} mm
        <span class="unrounded">(${this.pinWidth.toFixed(1)} mm)</span>
      </div>

      <div>Angle: ${90 - Math.round((this.angle * 180) / Math.PI)}°</div>

      <div>
        Smallest distance between dovetails:
        ${Math.round(this.pinWidth - 2 * this.tailMarkOffset)} mm
      </div>
    `;
  }

  static styles = css`
    .unrounded {
      color: #999;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "dt-info": Info;
  }
}
