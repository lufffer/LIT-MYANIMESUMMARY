import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import styles from "./section-trailer-styles";

@customElement("section-trailer")
class SectionTrailer extends LitElement {
  static styles = styles;

  @property() public trailer?: string;

  render() {
    return this.trailer !== ""
      ? html`
          <iframe
            src="https://www.youtube.com/embed/${this.trailer}"
            allowfullscreen
          ></iframe>
        `
      : html``;
  }
}

export default SectionTrailer;
