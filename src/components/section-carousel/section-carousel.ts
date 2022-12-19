import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import styles from "./section-carousel-styles";

@customElement("section-carousel")
class SectionCarousel extends LitElement {
  static styles = styles;

  @property() public data: any;

  render() {
    return html`
      <lulit-carousel class="carousel">
        ${this.data?.map(
          (anime: any) =>
            html`<figure>
              <img src="${anime.images.webp.large_image_url}" />
              <figcaption>
                <h2>${anime.title}</h2>
                <p>${anime.synopsis}</p>
              </figcaption>
            </figure>`
        )}
      </lulit-carousel>
    `;
  }
}

export default SectionCarousel;
