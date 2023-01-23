import styled from "styled-components";
import { Media } from "ui";

export const StyledButtons = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    gap: 20px;

    margin: 0 60px;

    ${Media.SM} {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        margin: 0 20px;
    }
`;
