import styled, { createGlobalStyle } from "styled-components";
import { ResetCSS } from "./resetCSS";
import { Theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    ${ResetCSS}

    html[theme="dark"]{
      ${Theme.Dark}
    }

    html[theme="light"]{
      ${Theme.Light}
    }

    body {}
`;

export const Wrapper = styled.div``;
