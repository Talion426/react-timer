import styled from "styled-components";
import { Color } from "../../ui/colors";

export const StyledThemeToggler = styled.input`
    position: absolute;
    top: 40px;
    right: 80px;

    width: 80px;
    height: 40px;

    background: ${Color.Primary};
    border: 2px solid ${Color.Quinary};
    border-radius: 50px;
    appearance: none;

    cursor: pointer;

    &::before {
        content: "";

        position: absolute;
        z-index: 2;
        top: 3px;
        left: 3px;

        display: block;

        width: 30px;
        height: 30px;

        background: ${Color.Quinary};
        border-radius: 50%;

        transition: all 0.2s ease-in-out;
    }

    &:checked {
        background-color: ${Color.Primary};

        &::before {
            content: "";

            left: 42px;

            background: ${Color.Quinary};
        }
    }
`;
