import styled from "styled-components";
import { Color, Media } from "ui";

export const StyledIntervalsList = styled.div`
    flex: 1 0 auto;

    max-height: 260px;
    padding: 20px;
    margin-bottom: 40px;
    overflow: hidden;

    border: 2px solid ${Color.Tertiary};
    border-radius: 20px;

    ${Media.SM} {
        max-height: 200px;
    }
`;

export const IntervalsNav = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    padding-bottom: 10px;

    text-align: center;

    border-bottom: 1px solid ${Color.Tertiary};

    ${Media.SM} {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const IntervalsBody = styled.div`
    max-height: 100%;
    overflow: auto;
`;

export const NavItem = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: ${Color.Quinary};
`;
