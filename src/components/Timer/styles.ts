import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Media } from "ui";

export const StyledTimer = styled(motion.section)`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 850px;
    margin: 40px auto;
    padding: 80px 50px;

    border: 5px solid ${Color.Quaternary};
    border-radius: 20px;

    ${Media.LG} {
        width: 720px;
        padding: 80px 40px;

        border: 4px solid ${Color.Quaternary};
    }
    ${Media.MD} {
        width: 530px;
        padding: 100px 40px 20px;
    }
    ${Media.SM} {
        width: 100%;
        margin: 0px;
    }
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

    ${Media.SM} {
        gap: 10px;
    }
`;

export const NavItem = styled.button<{ active: boolean }>`
    font-size: 18px;
    font-weight: 700;
    padding: 10px;
    color: ${({ active }) => (active ? `${Color.Tertiary}` : `${Color.Quinary}`)};

    background: none;

    transition: all 0.2s ease-in-out;

    ${Media.SM} {
        font-size: 16px;
        padding: 7px;
    }

    &:hover {
        opacity: 0.8;
    }
    &:active {
        transform: scale(95%);
    }
`;
