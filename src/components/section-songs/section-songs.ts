import { html, LitElement, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import styles from "./section-songs-styles";

import fetchData from "../../services/animelist";
import { urlAnime } from "../../services/animelist";

@customElement("section-songs")
class SectionSongs extends LitElement {
  static styles = styles;

  @property() public id = "";

  @state() private _data: any;

  async willUpdate(changedProperties: PropertyValues<this>) {
    if (changedProperties.has("id")) {
      this._data = await fetchData(
        new URL(`${urlAnime.toString()}/${this.id}/full`)
      );
    }
  }

  render() {
    return html`
      <div>
        <table>
          <thead>
            <tr>
              <th>Openings</th>
            </tr>
          </thead>
          <tbody>
            ${this._data?.data.theme.openings.map(
              (opening: string) =>
                html`<tr>
                  <td>${opening}</td>
                </tr>`
            )}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Endings</th>
            </tr>
          </thead>
          <tbody>
            ${this._data?.data.theme.endings.map(
              (ending: string) =>
                html`<tr>
                  <td>${ending}</td>
                </tr>`
            )}
          </tbody>
        </table>
      </div>
    `;
  }
}

export default SectionSongs;
