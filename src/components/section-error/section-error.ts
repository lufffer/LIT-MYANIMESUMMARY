import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import styles from "./section-error-styles";

@customElement("section-error")
class SectionError extends LitElement {
  // Styles
  static styles = styles;

  // Properties
  @property() msg?: string;

  render() {
    return html`
      <section class="error">
        <h2>${this.msg || "Anime does not exist"}</h2>
        <img src="./raiden-shogun.gif" />
      </section>
    `;
  }
}

export default SectionError;
