import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import styles from "./section-data-styles";

@customElement("section-data")
class SectionData extends LitElement {
  static styles = styles;

  @property() type?: string;
  @property() source?: string;
  @property() episodes?: string;
  @property() status?: string;
  @property() from?: string;
  @property() to?: string;
  @property() rating?: string;
  @property() studio?: string;

  render() {
    return html`
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <h3>TYPE</h3>
                <p>${this.type}</p>
              </td>
              <td>
                <h3>SOURCE</h3>
                <p>${this.source}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3>EPISODES</h3>
                <p>${this.episodes}</p>
              </td>
              <td>
                <h3>STATUS</h3>
                <p>${this.status}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3>FROM</h3>
                <p>${this.from}</p>
              </td>
              <td>
                <h3>TO</h3>
                <p>${this.to}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3>RATING</h3>
                <p>${this.rating}</p>
              </td>
              <td>
                <h3>STUDIO</h3>
                <p>${this.studio}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
}

export default SectionData;
