import { css } from "lit";

const styles = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .error {
    height: 100vh;
    width: 100%;
    text-align: center;
  }

  h2 {
    text-align: center;
    padding: 4rem 0;
  }
`;

export default styles;
