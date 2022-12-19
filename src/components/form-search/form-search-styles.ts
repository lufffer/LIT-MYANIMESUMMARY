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
    width: calc(100% - 2rem);
    height: 2.5rem;
    transform: translateY(-1rem);
  }

  form {
    position: relative;
    width: 100%;
    height: 100%;
  }

  input {
    border: 1px solid var(--white);
  }

  input[type="search"]:-webkit-autofill,
  input[type="search"]:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  input[data-autocompleted] {
    background-color: transparent !important;
  }

  /* Add margin to the ‘X’ from Internet Explorer */
  input[type="search"]::-ms-clear {
    margin-left: 1rem;
  }
  input[type="search"]::-ms-reveal {
    margin-left: 1rem;
  }
  /* Add margin to the ‘X’ from Chrome */
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    margin-left: 1rem;
  }

  input[type="search"] {
    border-radius: 0.5rem 0 0 0.5rem;
    padding: 0 1rem;
    height: 100%;
    width: calc(100% - 3rem);
    font-size: 1rem;
    color: var(--white);
    background-color: var(--black-50);
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    border: 1px solid var(--white);
    border-radius: 0 0.5rem 0.5rem 0;
    height: 100%;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--black-50);
  }

  button:hover {
    cursor: pointer;
  }

  img {
    width: 1rem;
    filter: invert(100%) sepia(0%) saturate(7487%) hue-rotate(9deg)
      brightness(109%) contrast(103%);
    opacity: 50%;
  }
`;

export default styles;
