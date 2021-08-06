import styled, { createGlobalStyle } from "styled-components"
import * as fonts from "../fonts"

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Macho Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Macho Regular'), url('${fonts.MachoRegular}') format('truetype');
  }

  @font-face {
    font-family: 'Macho Medium';
    font-style: normal;
    font-weight: normal;
    src: local('Macho Medium'), url('${fonts.MachoMedium}') format('truetype');
  }

  @font-face {
    font-family: 'Macho SemiBold';
    font-style: normal;
    font-weight: 500;
    src: local('Macho SemiBold'), url('${fonts.MachoSemiBold}') format('truetype');
  }

  @font-face {
    font-family: 'Macho SemiBoldItalic';
    font-style: italic;
    font-weight: 500;
    src: local('Macho SemiBold'), url('${fonts.MachoSemiBoldItalic}') format('truetype');
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  div[role="group"][tabindex] {
    height: 100%;
  }

  body {
    background-color: ${props => (props.theme === "default" ? "#F6F6F6" : "white")};
    margin: 0;
  }

  @keyframes ldio-gqrkjxrpqyt-o {
    0%    { opacity: 1; transform: translate(0 0) }
   49.99% { opacity: 1; transform: translate(80px,0) }
   50%    { opacity: 0; transform: translate(80px,0) }
  100%    { opacity: 0; transform: translate(0,0) }
  }
  @keyframes ldio-gqrkjxrpqyt {
      0% { transform: translate(0,0) }
    50% { transform: translate(80px,0) }
    100% { transform: translate(0,0) }
  }
  .ldio-gqrkjxrpqyt div {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    top: 60px;
    left: 20px;
  }
  .ldio-gqrkjxrpqyt div:nth-child(1) {
    background: #5761fb;
    animation: ldio-gqrkjxrpqyt 1.1764705882352942s linear infinite;
    animation-delay: -0.5882352941176471s;
  }
  .ldio-gqrkjxrpqyt div:nth-child(2) {
    background: #fcd344;
    animation: ldio-gqrkjxrpqyt 1.1764705882352942s linear infinite;
    animation-delay: 0s;
  }
  .ldio-gqrkjxrpqyt div:nth-child(3) {
    background: #5761fb;
    animation: ldio-gqrkjxrpqyt-o 1.1764705882352942s linear infinite;
    animation-delay: -0.5882352941176471s;
  }
  .loadingio-spinner-dual-ball-fwx0xeawod {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: #ffffff;
  }
  .ldio-gqrkjxrpqyt {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-gqrkjxrpqyt div { box-sizing: content-box; }
`;
