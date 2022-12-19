import { css } from "lit";

const styles = css`
  :host {
    --white: hsla(0deg, 0%, 100%, 100%);
    --white-75: hsla(0deg, 0%, 100%, 75%);
    --white-50: hsla(0deg, 0%, 100%, 50%);
    --white-25: hsla(0deg, 0%, 100%, 25%);
    --black: hsla(0deg, 0%, 0%, 100%);
    --black-75: hsla(0deg, 0%, 0%, 75%);
    --black-50: hsla(0deg, 0%, 0%, 50%);
    --black-25: hsla(0deg, 0%, 0%, 25%);
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  nav {
    display: none;
  }

  span {
    font-size: 1.5rem;
  }

  main {
    width: 100%;
    height: 100vh;
    background-image: url("hero.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  section {
    height: 100vh;
    width: 100%;
  }

  .home {
    height: 100%;
    width: 100%;
  }

  .data {
    background-image: url("hero.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  .songs {
    background-image: url("hero.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media (min-width: 992px) and (min-height: 700px) {
    nav {
      position: absolute;
      top: 1rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      padding: 0 1rem;
      border-radius: 1rem;
      height: 1.75rem;
      width: calc(100% - 2rem);
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      color: white;
      background-color: var(--black-50);
    }

    img {
      width: 20px;
      height: 20px;
    }

    main {
      background-image: url("hero_lg.jpg");
    }

    div {
      position: absolute;
      top: 2.75rem;
      left: 0;
      height: calc(100vh - 75px - 2.75rem);
      width: 100%;
      padding: 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 50% 50%;
      gap: 1rem;
      z-index: 0;
    }

    section {
      height: 100%;
      width: 100%;
      border-radius: 1rem;
      overflow: hidden;
    }

    .carousel {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    .data {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      background: none;
    }

    .trailer {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    .songs {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      background: none;
    }
  }
`;

export default styles;
