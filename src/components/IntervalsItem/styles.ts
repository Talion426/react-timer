import styled from "styled-components";
import { Color } from "ui";

export const StyledIntervalsItem = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    padding: 20px 0;

    text-align: center;

    border-bottom: 1px solid ${Color.Tertiary};
`;

export const Text = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: ${Color.Quinary};
`;
