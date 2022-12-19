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
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    margin-top: 1rem;
    color: var(--white-50);
  }

  @media (min-width: 992px) and (min-height: 700px) {
    h1 {
      visibility: hidden;
    }
  }
`;

export default styles;
