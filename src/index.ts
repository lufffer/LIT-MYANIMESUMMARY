// Import lit
import { LitElement, html } from "lit";
import { customElement, state, query } from "lit/decorators.js";

// Import external components
import "lulit-carousel";

// Import local components
import "./components/section-home/section-home";
import "./components/section-carousel/section-carousel";
import "./components/section-error/section-error";
import "./components/section-data/section-data";
import "./components/section-trailer/section-trailer";
import "./components/section-songs/section-songs";

// Import styles
import styles from "./index-styles";

// Import types
import { DataType } from "./index-types";
import "lulit-carousel";

@customElement("anime-summary")
class AnimeSummary extends LitElement {
  // Styles
  static styles = styles;

  // Queries
  @query("#error") private $error?: HTMLTableSectionElement;
  @query("#carousel") private $carousel?: HTMLTableSectionElement;

  // Private states
  @state() private _data!: DataType;
  @state() private _selected = 0;

  // Private methods
  private async _updateData(e: CustomEventInit) {
    this._data = e.detail;
    await this.updateComplete;

    this.$error?.scrollIntoView({ behavior: "smooth" });
    this.$carousel?.scrollIntoView({ behavior: "smooth" });
  }

  private _updateSelected(e: CustomEventInit) {
    this._selected = e.detail.selected;
  }

  // Lifecycle
  connectedCallback(): void {
    super.connectedCallback();

    this.addEventListener("apiResponse", this._updateData);
    this.addEventListener("lutransitionend", this._updateSelected);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    this.removeEventListener("apiResponse", this._updateData);
    this.removeEventListener("lutransitionend", this._updateSelected);
  }

  render() {
    return html`<nav>
        <span>Anime Summary</span>
        <a href="https://wwww.github.com/lufffer/LIT-ANIMESUMMARY">
          <img src="github-mark.svg" />
        </a>
      </nav>
      <main>
        <section class="home"><section-home></section-home></section>
      </main>
      ${(this._data?.status === 200 || this._data?.status === 304) &&
      this._data.data &&
      this._data.data.length > 0
        ? html` <div>
            <section class="carousel">
              <section-carousel
                .data="${this._data.data}"
                id="carousel"
              ></section-carousel>
            </section>
            <section class="data">
              <section-data
                type="${this._data.data[this._selected].type}"
                source="${this._data.data[this._selected].source}"
                episodes="${this._data.data[this._selected].episodes || 0}"
                status="${this._data.data[this._selected].status}"
                from="${this._data.data[this._selected].aired.prop.from
                  .day}/${this._data.data[this._selected].aired.prop.from
                  .month}/${this._data.data[this._selected].aired.prop.from
                  .year}"
                to="${this._data.data[this._selected].aired.prop.to.day ||
                this._data.data[this._selected].aired.prop.from.day}/${this
                  ._data.data[this._selected].aired.prop.to.month ||
                this._data.data[this._selected].aired.prop.from.month}/${this
                  ._data.data[this._selected].aired.prop.to.year ||
                this._data.data[this._selected].aired.prop.from.year}"
                rating="${this._data.data[this._selected].rating}"
                studio="${this._data.data[this._selected].studios &&
                this._data.data[this._selected].studios.length > 0
                  ? this._data.data[this._selected].studios[0].name
                  : ""}"
              >
              </section-data>
            </section>
            <section class="trailer">
              <section-trailer
                trailer="${this._data.data[this._selected].trailer.youtube_id}"
              ></section-trailer>
            </section>
            <section class="songs">
              <section-songs
                id="${this._data.data[this._selected].mal_id}"
              ></section-songs>
            </section>
          </div>`
        : html`<section-error
            msg="${this._data?.msg}"
            id="error"
          ></section-error>`}`;
  }
}

export default AnimeSummary;
