import { css } from "styled-components";
import { Color } from "./colors";

const Button = css`
    font-size: 20px;
    font-weight: 700;
    color: ${Color.Primary};
`;

const Time = css`
    font-size: 80px;
    font-weight: 700;
    color: ${Color.Primary};
`;

const Title = css`
    font-size: 20px;
    font-weight: 700;
    color: ${Color.Primary};
`;

export const Typography = {
    Button: Button,
    Time: Time,
    Title: Title,
};
