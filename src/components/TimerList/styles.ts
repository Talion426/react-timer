import styled from "styled-components";
import { Media } from "ui";

export const StyledTimerList = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;

    margin-bottom: 115px;

    ${Media.LG} {
        gap: 15px;

        margin-bottom: 134px;
    }
    ${Media.MD} {
        gap: 10px;
    }
    ${Media.SM} {
        margin-bottom: 80px;
    }
`;
