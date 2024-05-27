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

  private get tailsCount(): number {
    return Math.floor(
      this.workpieceWidth / this.workpieceHeight * DIVISION_FACTOR[this.division]
    );
  }

  private get partsCount(): number {
    return this.tailsCount * 3 + 1;
  }

  private get partWidth(): number {
    return Math.floor(this.workpieceWidth / this.partsCount);
  }

  private get pinWidth(): number {
    return this.partWidth;
  }

  private get tailWidth(): number {
    return 2 * this.partWidth;
  }

  private get deviation(): number {
    return this.workpieceWidth - this.partsCount * this.partWidth;
  }

  private get angle(): number {
    return Math.atan(
      (2.5 * this.workpieceHeight) / (this.tailWidth / 2)
    )
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
    // Offset of the lower corners to the tail mark on the center line
    const tailMarkOffset =
      (3 * this.workpieceHeight) / Math.tan(this.angle) - this.tailWidth / 2;

    const tails = new Array(this.tailsCount)
      .fill(undefined)
      .map((_, i) =>
        this.renderTail(
          this.deviation/2 + i * (this.pinWidth + this.tailWidth) + this.pinWidth - tailMarkOffset,
          this.tailWidth + 2 * tailMarkOffset
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
            Workpiece width (mm):
            <input type="number" .value=${this.workpieceWidth} @change=${(e) => this.workpieceWidth = e.target.value} />
          </label>
        </div>

        <div>
          <label>
            Workpiece height (mm):
            <input type="number" .value=${this.workpieceHeight} @change=${(e) => this.workpieceHeight = e.target.value} />
          </label>
        </div>

        <div>
          <label>
            Division:
            ${Object.values(Division).map(division => html`
              <label>
                <input name="division" type="radio" .value=${division} .checked=${this.division === division} @change=${(e) => this.division = division} />
                ${division}
              </label>
            `)}
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
