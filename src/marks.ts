import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { join } from "lit/directives/join.js";

@customElement("dt-marks")
export class Marks extends LitElement {
  @property()
  pinWidth = 0;

  @property()
  tailsCount = 0;

  @property()
  tailWidth = 0;

  private getMarks(): ReadonlyArray<number> {
    const marks = [];
    for (let i = 0; i < this.tailsCount; i += 1) {
      const base = i * (this.pinWidth + this.tailWidth);
      marks.push(Math.round(base + this.pinWidth));
      marks.push(Math.round(base + this.pinWidth + this.tailWidth));
    }
    return marks;
  }

  render() {
    return html`Required marks on center line of tail piece:<br />${join(
        this.getMarks(),
        ", ",
      )}
      mm`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dt-marks": Marks;
  }
}
