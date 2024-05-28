import { LitElement, css, html, svg } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { join } from 'lit/directives/join.js';

enum Division {
  Fine = "fine",
  Medium = "medium",
  Coarse = "coarse"
}

const DIVISION_FACTOR = {
  [Division.Fine]: 1.0,
  [Division.Medium]: 2/3,
  [Division.Coarse]: 0.5,
};

@customElement('dovetail-calculator')
export class DovetailCalculator extends LitElement {
  @state()
  private workpieceWidth = 320;

  @state()
  private workpieceHeight = 20;

  private get workpieceTop() {
    return 2 * this.workpieceHeight;
  }
  private get workpieceBottom() {
    return this.workpieceTop + this.workpieceHeight;
  }

  @state()
  private division: Division = Division.Fine

  @state()
  private tailPinRatio = 2;

  private get tailsCount(): number {
    return Math.floor(
      this.workpieceWidth / this.workpieceHeight * DIVISION_FACTOR[this.division]
    );
  }

  private get partsCount(): number {
    const pinParts = this.tailsCount + 1;
    const tailParts = Math.floor(this.tailsCount * this.tailPinRatio);
    return pinParts + tailParts;
  }

  private get partWidth(): number {
    return Math.floor(this.workpieceWidth / this.partsCount);
  }

  private get pinWidth(): number {
    return this.partWidth;
  }

  private get tailWidth(): number {
    return this.partWidth * this.tailPinRatio;
  }

  private get deviation(): number {
    return this.workpieceWidth - this.partsCount * this.partWidth;
  }

  private get angle(): number {
    return Math.atan(
      (2.5 * this.workpieceHeight) / (this.tailWidth / 2)
    )
  }

  /**
   * Offset of the lower corners to the tail mark on the center line
   */
  private get tailMarkOffset(): number {
   return (3 * this.workpieceHeight) / Math.tan(this.angle) - this.tailWidth / 2;
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
          this.deviation/2 + i * (this.pinWidth + this.tailWidth) + this.pinWidth - this.tailMarkOffset,
          this.tailWidth + 2 * this.tailMarkOffset
        )
      );
    return join(tails, '')
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
      <h1>Schwalben & Zinken</h1>
      <p>This is a calculator and visualizer for <a href="https://en.wikipedia.org/wiki/Dovetail_joint">dovetail joints</a>. It first divides the workpiece into parts/dovetails according to <a href="https://www.youtube.com/watch?v=OhKzkUbvSC8">Hauke Schmidt</a> then uses a dovetail angle according to <a href="https://archive.org/details/dermbelbaueinfac0000span">Fritz Spannagel</a>.
      <section>
        <div>
          <label>
            Workpiece width:
            <input type="number" .value=${this.workpieceWidth} @change=${(e: Event) => this.workpieceWidth = Number((e.target as HTMLInputElement).value)} min="1" /> mm
          </label>
        </div>

        <div>
          <label>
            Workpiece height (thickness):
            <input type="number" .value=${this.workpieceHeight} @change=${(e: Event) => this.workpieceHeight = Number((e.target as HTMLInputElement).value)} min="1" /> mm
          </label>
        </div>

        <div>
          <label>
            Division:
            ${Object.values(Division).map(division => html`
              <label>
                <input name="division" type="radio" .value=${division} .checked=${this.division === division} @change=${() => this.division = division} />
                ${division}
              </label>
            `)}
          </label>
        </div>

        <div>
          <label>
            Dovetail to pin width ratio:
            <input type="number" .value=${this.tailPinRatio} @change=${(e: Event) => this.tailPinRatio = Number((e.target as HTMLInputElement).value)} min="0" step="0.25" />
          </label>
        </div>
      </section>

      <section>
        <div>
          Parts: ${this.partsCount} × ${this.partWidth} mm
        </div>

        <div>
          Dovetails: ${this.tailsCount} × ${this.tailWidth} mm
        </div>

        <div>
          Pins: ${this.pinWidth} mm (first/last pins are ${this.pinWidth + this.deviation / 2} mm)
        </div>

        <div>
          Angle: ${90 - Math.round(this.angle * 180 / Math.PI)}°
        </div>

        <div>
          Dovetail tip-to-tip distance: ${Math.round(this.pinWidth - 2 * this.tailMarkOffset)} mm
        </div>
      </section>

      <section>
        <svg width=${this.workpieceWidth} height=${
        3 * this.workpieceHeight
      } xmlns="http://www.w3.org/2000/svg">
          ${this.renderWorkpiece()}
          ${this.renderTails()}
        </svg>
      </section>
    `;
  }

  static styles = css`
    :host {
      margin: 1rem;
    }

    section {
      margin-top: 1rem;
    }

    input[type=number] {
      width: 8ch;
    }

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
    'dovetail-calculator': DovetailCalculator;
  }
}
