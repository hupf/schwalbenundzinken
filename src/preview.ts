import { LitElement, css, html, svg } from "lit";
import { customElement, property } from "lit/decorators.js";
import { join } from "lit/directives/join.js";

@customElement("dt-preview")
export class Preview extends LitElement {
  @property()
  workpieceWidth = 0;

  @property()
  workpieceHeight = 0;

  @property()
  tailsCount = 0;

  @property()
  pinWidth = 0;

  @property()
  tailWidth = 0;

  @property()
  tailMarkOffset = 0;

  private get workpieceTop() {
    return 2 * this.workpieceHeight;
  }
  private get workpieceBottom() {
    return this.workpieceTop + this.workpieceHeight;
  }

  private renderWorkpiece() {
    return svg`
      <path class="workpiece tails" d="M0 0 L${this.workpieceWidth} 0 ${this.workpieceWidth} ${this.workpieceTop} 0 ${this.workpieceTop} 0 0" />

      <path class="workpiece pins" d="M0 ${this.workpieceTop} L${
        this.workpieceWidth
      } ${this.workpieceTop} ${this.workpieceWidth} ${
        this.workpieceTop + this.workpieceHeight
      } 0 ${this.workpieceTop + this.workpieceHeight} 0 ${this.workpieceTop}" />
    `;
  }

  private renderTails() {
    const tails = new Array(this.tailsCount)
      .fill(undefined)
      .map((_, i) =>
        this.renderTail(
          i * (this.pinWidth + this.tailWidth) +
            this.pinWidth -
            this.tailMarkOffset,
          this.tailWidth + 2 * this.tailMarkOffset,
        ),
      );
    return join(tails, "");
  }

  private renderTail(offset: number, width: number) {
    return svg`
      <path class="dovetail" d="M${offset + width / 2} 0 L${offset} ${
        this.workpieceBottom
      } ${offset + width} ${this.workpieceBottom} ${offset + width / 2} 0" />
    `;
  }

  render() {
    return html`
      <svg
        width=${this.workpieceWidth}
        height=${3 * this.workpieceHeight}
        xmlns="http://www.w3.org/2000/svg"
        style="margin-right: ${this.workpieceWidth}px; margin-bottom: ${3 *
        this.workpieceHeight}px"
      >
        ${this.renderWorkpiece()} ${this.renderTails()}
      </svg>
    `;
  }

  static styles = css`
    svg {
      transform: scale(2);
      transform-origin: top left;
    }

    svg path.workpiece.pins {
      fill: #ccc;
    }

    svg path.workpiece.tails,
    svg path.dovetail {
      fill: #888;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "dt-preview": Preview;
  }
}
