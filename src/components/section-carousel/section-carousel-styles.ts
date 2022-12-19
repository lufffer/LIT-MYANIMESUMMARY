import { css } from "lit";

const styles = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .carousel {
    border-radius: 0;
    width: 100%;
    height: 100%;
  }

  .carousel img {
    height: 100%;
    width: 100%;
  }

  .carousel figcaption {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    background-color: var(--black-75);
  }

  .carousel figcaption h2 {
    margin-top: 1rem;
    color: var(--white);
  }

  .carousel figcaption p {
    margin: 2rem auto 0 auto;
    width: calc(100% - 7rem);
    height: 70%;
    line-height: 1.5;
    overflow-y: scroll;
    color: var(--white);
  }

  /* Hide scrollbar for Chrome, Safari and Opera */

  .carousel figcaption p::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */

  .carousel figcaption p {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .carousel:not(:defined) > * {
    display: none;
  }
`;

export default styles;
