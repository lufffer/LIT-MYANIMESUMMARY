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

  div {
    width: 100%;
    height: 100%;
    background-color: var(--black-50);
  }

  table {
    height: 100%;
    width: 100%;
    color: var(--white);
  }

  td {
    position: relative;
    width: 50%;
    height: 25%;
    text-align: center;
  }

  h3,
  p {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  h3 {
    padding-top: 1.5rem;
  }

  p {
    padding-top: 3.5rem;
  }
`;

export default styles;
