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
  private division: Division = Division.Medium

  @state()
  private tailPinRatio = 2;

  private get tailsCount(): number {
    return Math.floor(this.workpieceWidth / this.workpieceHeight * DIVISION_FACTOR[this.division]);
  }

  private get pinsCount(): number {
    return this.tailsCount + 1;
  }

  private get partsCount(): number {
    const pinParts = this.pinsCount;
    const tailParts = this.tailsCount * this.tailPinRatio;
    return pinParts + tailParts;
  }

  private get partWidth(): number {
    return Math.floor(this.workpieceWidth / this.partsCount);
  }

  private get pinWidth(): number {
    return this.partWidth;
  }

  private get tailWidth(): number {
    return Math.round(this.partWidth * this.tailPinRatio);
  }

  private get deviation(): number {
    return this.workpieceWidth - (this.tailsCount * this.tailWidth + this.pinsCount * this.pinWidth);
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
    console.log(this.tailsCount)
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

  private renderMarks() {
    const marks = [];
    for (let i = 0; i < this.tailsCount; i += 1) {
      const base = this.deviation / 2 + i * (this.pinWidth + this.tailWidth);
      marks.push(base + this.pinWidth);
      marks.push(base + this.pinWidth + this.tailWidth);
    }
    return html`Marks (on center line):<br>${join(marks, ", ")} mm`
  }

  render() {
    return html`
      <h1>Schwalben & Zinken</h1>
      <p>This is a calculator and visualizer for <a href="https://en.wikipedia.org/wiki/Dovetail_joint">dovetail joints</a>. It first determines the number of dovetails with a method that <a href="https://www.youtube.com/watch?v=OhKzkUbvSC8">Hauke Schmidt</a> demostrates and then develops the angle as described by <a href="https://d-nb.info/830690026">Fritz Spannagel</a>, where a triangle with three times the height of the workpiece is formed.
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
          Dovetail minimum distance: ${Math.round(this.pinWidth - 2 * this.tailMarkOffset)} mm
        </div>
      </section>

      <section>
        <svg width=${this.workpieceWidth} height=${
        3 * this.workpieceHeight
      } xmlns="http://www.w3.org/2000/svg" style="margin-right: ${this.workpieceWidth}px; margin-bottom: ${3 * this.workpieceHeight}px">
          ${this.renderWorkpiece()}
          ${this.renderTails()}
        </svg>
      </section>

      <section>
        ${this.renderMarks()}
      </section>

      <section class="source">
        Source code: <a href="https://github.com/hupf/schwalbenundzinken">github.com/hupf/schwalbenundzinken</a><br>
        © Mathis Hofer – free software under the terms of the Apache License 2.0.
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

    section.source {
      margin-top: 2rem;
      font-size: 0.7rem;
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
