import styled from "styled-components";
import { Color } from "ui";

export const StyledIntervalsList = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;

    padding: 20px;

    border-top: 2px solid ${Color.Tertiary};
    border-right: 2px solid ${Color.Tertiary};
    border-top-right-radius: 20px;
`;

export const IntervalsNav = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    padding-bottom: 10px;

    text-align: center;

    border-bottom: 1px solid ${Color.Tertiary};
`;

export const IntervalsBody = styled.div``;

export const NavItem = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: ${Color.Quinary};
`;
