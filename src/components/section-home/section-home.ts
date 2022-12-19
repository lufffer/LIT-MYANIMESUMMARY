// Import lit
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

// Import components
import "../form-search/form-search";

// Import styles
import styles from "./section-home-styles";

@customElement("section-home")
class SectionHome extends LitElement {
  // Styles
  static styles = styles;

  render() {
    return html`
      <h1>Anime Summary</h1>
      <form-search></form-search>
    `;
  }
}

export default SectionHome;
