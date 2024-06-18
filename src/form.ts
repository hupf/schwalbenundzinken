import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Division } from "./dovetail-calculator";

export type FormChangeEvent = CustomEvent<{
  workpieceWidth?: number;
  workpieceHeight?: number;
  division?: Division;
  tailPinRatio?: number;
}>;

@customElement("dt-form")
export class Form extends LitElement {
  @property()
  workpieceWidth = 0;

  @property()
  workpieceHeight = 0;

  @property()
  division: Division = Division.Medium;

  @property()
  tailPinRatio = 0;

  private onWorkpieceWidthChange(e: Event): void {
    const workpieceWidth =
      typeof e === "number" ? e : Number((e.target as HTMLInputElement).value);
    const changeEvent: FormChangeEvent = new CustomEvent("dt-form-change", {
      detail: { workpieceWidth },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(changeEvent);
  }

  private onWorkpieceHeightChange(e: Event): void {
    const workpieceHeight =
      typeof e === "number" ? e : Number((e.target as HTMLInputElement).value);
    const changeEvent: FormChangeEvent = new CustomEvent("dt-form-change", {
      detail: { workpieceHeight },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(changeEvent);
  }

  private onDivisionChange(division: Division): void {
    const changeEvent: FormChangeEvent = new CustomEvent("dt-form-change", {
      detail: { division },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(changeEvent);
  }

  private onTailPinRatioChange(e: Event): void {
    const tailPinRatio =
      typeof e === "number" ? e : Number((e.target as HTMLInputElement).value);
    const changeEvent: FormChangeEvent = new CustomEvent("dt-form-change", {
      detail: { tailPinRatio },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(changeEvent);
  }

  private onReset(): void {
    this.dispatchEvent(
      new CustomEvent("dt-form-reset", {
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      <div>
        <label>
          Workpiece width:
          <input
            type="number"
            .value=${this.workpieceWidth}
            @change=${this.onWorkpieceWidthChange.bind(this)}
            min="1"
          />
          mm
        </label>
      </div>

      <div>
        <label>
          Workpiece height (thickness):
          <input
            type="number"
            .value=${this.workpieceHeight}
            @change=${this.onWorkpieceHeightChange.bind(this)}
            min="1"
          />
          mm
        </label>
      </div>

      <div>
        <label>
          Division:
          ${Object.values(Division).map(
            (division) => html`
              <label>
                <input
                  name="division"
                  type="radio"
                  .value=${division}
                  .checked=${this.division === division}
                  @change=${() => this.onDivisionChange(division)}
                />
                ${division}
              </label>
            `,
          )}
        </label>
      </div>

      <div>
        <label>
          Dovetail to pin width ratio:
          <input
            type="number"
            .value=${this.tailPinRatio}
            @change=${this.onTailPinRatioChange.bind(this)}
            min="0"
            step="0.25"
          />:1
        </label>
      </div>

      <div>
        <button @click=${() => this.onReset()}>Reset</button>
      </div>
    `;
  }

  static styles = css`
    input[type="number"] {
      width: 8ch;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "dt-form": Form;
  }
}
