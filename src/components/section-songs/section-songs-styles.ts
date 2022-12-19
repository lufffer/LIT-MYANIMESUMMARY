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
    background-color: var(--black-50);
    height: 100%;
    width: 100%;
    overflow-y: scroll;
  }

  div::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  div {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  table {
    width: 100%;
    padding: 0 1rem;
    text-align: center;
    color: white;
  }

  tr {
    text-align: center;
  }

  th {
    padding: 2rem 0;
    font-size: 2rem;
    text-align: center;
  }

  td {
    height: 4rem;
    text-align: center;
  }
`;

export default styles;
