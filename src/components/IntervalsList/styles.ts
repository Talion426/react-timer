import styled from "styled-components";
import { Color } from "ui";

export const StyledIntervalsList = styled.div`
    flex: 1 0 auto;

    padding: 20px;
    margin-bottom: 40px;

    border: 2px solid ${Color.Tertiary};
    border-radius: 20px;
`;

export const IntervalsNav = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    padding-bottom: 10px;

    text-align: center;

    border-bottom: 1px solid ${Color.Tertiary};
`;

export const IntervalsBody = styled.div`
    max-height: 190px;
    overflow: auto;
`;

export const NavItem = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: ${Color.Quinary};
`;
