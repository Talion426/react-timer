import styled from "styled-components";
import { Color, Typography } from "ui";

export const StyledTimerItem = styled.div`
    overflow: hidden;

    width: 170px;

    text-align: center;

    border: 3px solid ${Color.Quinary};
    border-radius: 10px;
`;

export const Time = styled.h2`
    padding: 40px 30px;

    ${Typography.Time}

    background: ${Color.Quaternary};
`;

export const Title = styled.h3`
    padding: 15px 0;

    ${Typography.Title}

    background: ${Color.Tertiary};
`;
