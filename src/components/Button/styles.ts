import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Media, Typography } from "ui";

export const StyledButton = styled(motion.button)`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 15px;

    ${Typography.Button}

    background: ${Color.Quinary};
    border: 3px solid ${Color.Secondary};
    border-radius: 10px;

    transition: all 0.2s ease-in-out;

    ${Media.SM} {
        border: 2px solid ${Color.Secondary};
    }

    &:hover {
        background: ${Color.Quaternary};
    }
    &:active {
        transform: scale(95%);
    }
`;
