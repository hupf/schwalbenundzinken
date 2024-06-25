import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { map } from "lit/directives/map.js";
import { localized, msg } from "@lit/localize";
import "./form";
import { allLocales } from "./generated/locale-codes";
import "./info";
import "./marks";
import "./preview";
import { getLocale, setInitialLocale, updateLocale } from "./utils/locale";

export enum Division {
  Fine = "fine",
  Medium = "medium",
  Coarse = "coarse",
}

const DIVISION_FACTOR = {
  [Division.Fine]: 1.0,
  [Division.Medium]: 2 / 3,
  [Division.Coarse]: 0.5,
};

const WORKPIECE_WIDTH_KEY = "workpieceWidth";
const WORKPIECE_HEIGHT_KEY = "workpieceHeight";
const DIVISION_KEY = "division";
const TAIL_PIN_RATIO_KEY = "tailPinRatio";

const WORKPIECE_WIDTH_DEFAULT = 100;
const WORKPIECE_HEIGHT_DEFAULT = 15;
const DIVISION_DEFAULT: Division = Division.Medium;
const TAIL_PIN_RATIO_DEFAULT = 2;

@customElement("dovetail-calculator")
@localized()
export class DovetailCalculator extends LitElement {
  @state()
  private workpieceWidth = Number(
    this.readValue(WORKPIECE_WIDTH_KEY, WORKPIECE_WIDTH_DEFAULT),
  );

  @state()
  private workpieceHeight = Number(
    this.readValue(WORKPIECE_HEIGHT_KEY, WORKPIECE_HEIGHT_DEFAULT),
  );

  @state()
  private division: Division = this.readValue(
    DIVISION_KEY,
    DIVISION_DEFAULT,
  ) as Division;

  @state()
  private tailPinRatio = Number(
    this.readValue(TAIL_PIN_RATIO_KEY, TAIL_PIN_RATIO_DEFAULT),
  );

  private get tailsCount(): number {
    return Math.floor(
      (this.workpieceWidth / this.workpieceHeight) *
        DIVISION_FACTOR[this.division],
    );
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
    return this.workpieceWidth / this.partsCount;
  }

  private get pinWidth(): number {
    return this.partWidth * 1;
  }

  private get tailWidth(): number {
    return this.partWidth * this.tailPinRatio;
  }

  private get angle(): number {
    return Math.atan((2.5 * this.workpieceHeight) / (this.tailWidth / 2));
  }

  /**
   * Offset of the lower corners to the tail mark on the center line
   */
  private get tailMarkOffset(): number {
    return (
      (3 * this.workpieceHeight) / Math.tan(this.angle) - this.tailWidth / 2
    );
  }

  constructor() {
    super();
    setInitialLocale();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener("dt-form-change", this.handleFormChange);
    this.addEventListener("dt-form-reset", this.handleFormReset);
  }

  disconnectedCallback(): void {
    super.connectedCallback();
    this.removeEventListener("dt-form-change", this.handleFormChange);
    this.removeEventListener("dt-form-reset", this.handleFormReset);
  }

  private handleFormChange = (e: Event) => {
    if (e instanceof CustomEvent) {
      if (e.detail.workpieceWidth) {
        this.handleWorkpieceWidthChange(e.detail.workpieceWidth);
      } else if (e.detail.workpieceHeight) {
        this.handleWorkpieceHeightChange(e.detail.workpieceHeight);
      } else if (e.detail.division) {
        this.handleDivisionChange(e.detail.division);
      } else if (e.detail.tailPinRatio) {
        this.handleTailPinRatioChange(e.detail.tailPinRatio);
      }
    }
  };

  private handleFormReset = () => {
    this.handleWorkpieceWidthChange(WORKPIECE_WIDTH_DEFAULT);
    this.handleWorkpieceHeightChange(WORKPIECE_HEIGHT_DEFAULT);
    this.handleDivisionChange(DIVISION_DEFAULT);
    this.handleTailPinRatioChange(TAIL_PIN_RATIO_DEFAULT);
  };

  private handleWorkpieceWidthChange(value: number): void {
    this.workpieceWidth = value;
    this.storeValue(WORKPIECE_WIDTH_KEY, this.workpieceWidth);
  }

  private handleWorkpieceHeightChange(value: number): void {
    this.workpieceHeight = value;
    this.storeValue(WORKPIECE_HEIGHT_KEY, this.workpieceHeight);
  }

  private handleDivisionChange(division: Division): void {
    this.division = division;
    this.storeValue(DIVISION_KEY, this.division);
  }

  private handleTailPinRatioChange(value: number): void {
    this.tailPinRatio = value;
    this.storeValue(TAIL_PIN_RATIO_KEY, this.tailPinRatio);
  }

  private storeValue(key: string, value: unknown): void {
    localStorage.setItem(key, String(value));
  }

  private readValue(key: string, defaultValue: unknown): string {
    return localStorage.getItem(key) ?? String(defaultValue);
  }

  render() {
    console.log("render", getLocale());
    const wikipediaLink = msg("https://en.wikipedia.org/wiki/Dovetail_joint");
    const haukeLink = msg("https://www.youtube.com/watch?v=OhKzkUbvSC8");
    const spannagelLink = msg("https://d-nb.info/830690026");
    return html`
      <h1>Schwalben & Zinken</h1>
      <section class="explanation">
        ${msg(
          html`This is a calculator and visualizer for
            <a href="${wikipediaLink}">dovetail joints</a>
            used in woodworking. It first determines the number of dovetails
            based on the width/height of the workpiece, like
            <a href="${haukeLink}">Hauke Schmidt</a>
            demonstrates. Then the dovetail angle is developed as described by
            <a href="${spannagelLink}">Fritz Spannagel</a>, where a triangle
            with three times the height of the workpiece is formed.`,
        )}
      </section>
      <section class="form">
        <dt-form
          .workpieceWidth=${this.workpieceWidth}
          .workpieceHeight=${this.workpieceHeight}
          .division=${this.division}
          .tailPinRatio=${this.tailPinRatio}
        ></dt-form>
      </section>

      <section>
        <dt-info
          .partsCount=${this.partsCount}
          .partWidth=${this.partWidth}
          .pinWidth=${this.pinWidth}
          .tailsCount=${this.tailsCount}
          .tailWidth=${this.tailWidth}
          .angle=${this.angle}
          .tailMarkOffset=${this.tailMarkOffset}
        ></dt-info>
      </section>

      <section>
        <dt-preview
          .workpieceWidth=${this.workpieceWidth}
          .workpieceHeight=${this.workpieceHeight}
          .tailsCount=${this.tailsCount}
          .pinWidth=${this.pinWidth}
          .tailWidth=${this.tailWidth}
          .tailMarkOffset=${this.tailMarkOffset}
        ></dt-preview>
      </section>

      <section>
        <dt-marks
          .pinWidth=${this.pinWidth}
          .tailsCount=${this.tailsCount}
          .tailWidth=${this.tailWidth}
        ></dt-marks>
      </section>

      <section class="footer">
        <a href="https://github.com/hupf/schwalbenundzinken"
          >${msg("Source on GitHub")}</a
        >
        ·
        © <a href="https://bitgarten.ch">Mathis Hofer</a>
        ·
        ${msg(
          "Please use and share, this is free software under the terms of the Apache License 2.0.",
        )}
        ·
        <ul class="locales">${map(allLocales, (locale) => html`<li><button class=${classMap({ active: locale === getLocale() })} @click=${() => updateLocale(locale)}>${locale}</button></li>`)}
      </section>
    `;
  }

  static styles = css`
    :host {
      margin: 1rem;
    }

    h1 {
      margin-top: 0.5rem;
      font-weight: 300;
      font-size: 2.5rem;
    }

    a,
    a:active,
    a:visited {
      color: #213547;
    }

    a:hover {
      color: #000;
    }

    section {
      margin-top: 1rem;
      max-width: min(calc(100vw - 2 * 1rem), 80ch);
    }

    section.explanation,
    section.form {
      padding-bottom: 1rem;
      border-bottom: 1px solid #eee;
    }

    section.preview {
      max-width: auto;
    }

    section.footer {
      margin-top: 2rem;
      font-size: 0.7rem;
    }

    .locales {
      list-style: none;
      margin: 0;
      padding: 0;
      display: inline-flex;
      gap: 1ch;
    }

    .locales button {
      padding: 0;
      border: 0;
      background: none;
      font-size: 0.7rem;
      text-decoration: underline;
      cursor: pointer;
    }

    .locales button.active {
      font-weight: 600;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "dovetail-calculator": DovetailCalculator;
  }
}
