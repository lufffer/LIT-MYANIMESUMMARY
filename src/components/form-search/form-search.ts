// Import lit
import { LitElement, html } from "lit";
import { customElement, query } from "lit/decorators.js";

// Import services
import fetchData, { urlTop10, urlAnime } from "../../services/animelist";

// Import styles
import styles from "./form-search-styles";

@customElement("form-search")
class FormSearch extends LitElement {
  // Styles
  static styles = styles;

  // Query elements
  @query("#search") $input: HTMLInputElement | undefined;

  // Events
  private async handleSubmit(e: Event | undefined) {
    e?.preventDefault();

    try {
      if (!e || this.$input?.value === "") {
        this._sendData(await fetchData(urlTop10));
      } else {
        let url = new URL(urlAnime);
        url.searchParams.append("q", this.$input ? this.$input.value : "");
        this._sendData(await fetchData(url));
      }
    } catch (err: any) {
      this._sendData({ status: err.status, msg: err.msg });
    }
  }

  // Lifecycle
  firstUpdated(): void {
    this.handleSubmit(undefined);
  }

  // Custom events
  private _sendData(data: object): void {
    this.dispatchEvent(
      new CustomEvent("apiResponse", {
        bubbles: true,
        composed: true,
        detail: data,
      })
    );
  }

  render() {
    return html`
      <form @submit=${this.handleSubmit}>
        <input type="search" placeholder="Search anime" id="search" />
        <button type="submit"><img src="./Search-icon.svg" /></button>
      </form>
    `;
  }
}

export default FormSearch;
