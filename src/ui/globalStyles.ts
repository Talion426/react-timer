import styled, { createGlobalStyle } from "styled-components";
import { Color } from "ui";
import { ResetCSS } from "ui";
import { Dark, Light } from "./theme";

export const GlobalStyles = createGlobalStyle`
    ${ResetCSS}

    html[theme="dark"]{
      ${Dark}
    }

    html[theme="light"]{
      ${Light}
    }

    body {
      font-family: "Comfortaa";
      background: ${Color.Primary};
      overflow: hidden;
    }
`;

export const Wrapper = styled.div``;
