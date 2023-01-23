import styled from "styled-components";
import { Color } from "ui";

export const StyledTimer = styled.section`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 850px;
    margin: 40px auto;
    padding: 80px 50px;

    border: 5px solid ${Color.Quaternary};
    border-radius: 20px;
`;

export const Navigation = styled.div`
    position: absolute;
    top: -2px;
    left: -2px;

    display: flex;
    gap: 20px;

    border: 2px solid ${Color.Quaternary};
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

export const NavItem = styled.button<{ active: boolean }>`
    font-size: 18px;
    font-weight: 700;
    padding: 10px;
    color: ${({ active }) => (active ? `${Color.Tertiary}` : `${Color.Quinary}`)};

    background: none;
`;
