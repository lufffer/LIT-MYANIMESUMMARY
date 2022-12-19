import { css } from "lit";

const styles = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :host {
    height: 100vh;
    width: 100%;
  }

  iframe {
    height: 100%;
    width: 100%;
    border: 0;
  }
`;

export default styles;
