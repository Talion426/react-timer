import styled from "styled-components";
import { Color, Typography } from "ui";

export const StyledButton = styled.button`
    padding: 15px 50px;

    ${Typography.Button}

    background: ${Color.Quinary};
    border: 3px solid ${Color.Secondary};
    border-radius: 10px;
`;
