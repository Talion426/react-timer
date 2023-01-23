import styled from "styled-components";
import { Media } from "ui";
import { Color } from "../../ui/colors";

export const StyledThemeToggler = styled.input`
    position: absolute;
    top: 10px;
    right: 10px;

    width: 80px;
    height: 40px;

    background: ${Color.Primary};
    border: 3px solid ${Color.Quaternary};
    border-radius: 50px;
    appearance: none;

    cursor: pointer;

    &::before {
        content: "";

        position: absolute;
        z-index: 2;
        top: 2px;
        left: 2px;

        display: block;

        width: 30px;
        height: 30px;

        background: ${Color.Quaternary};
        border-radius: 50%;

        transition: all 0.2s ease-in-out;

        ${Media.SM} {
            width: 22px;
            height: 22px;
        }
    }

    &:checked {
        background-color: ${Color.Primary};

        &::before {
            content: "";

            left: 42px;

            background: ${Color.Quaternary};

            ${Media.SM} {
                left: 32px;
            }
        }
    }

    ${Media.SM} {
        width: 60px;
        height: 30px;

        border: 2px solid ${Color.Quaternary};
    }
`;
