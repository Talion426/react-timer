import styled from "styled-components";
import { Color, Media, Typography } from "ui";

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 15px;

    ${Typography.Button}

    background: ${Color.Quinary};
    border: 3px solid ${Color.Secondary};
    border-radius: 10px;

    ${Media.SM} {
        border: 2px solid ${Color.Secondary};
    }
`;
