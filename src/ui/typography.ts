import { css } from "styled-components";
import { Media, Color } from "ui";

const Button = css`
    font-size: 20px;
    font-weight: 700;
    color: ${Color.Primary};

    ${Media.SM} {
        font-size: 16px;
    }
`;

const Time = css`
    font-size: 80px;
    font-weight: 700;
    color: ${Color.Primary};

    ${Media.LG} {
        font-size: 70px;
    }
    ${Media.MD} {
        font-size: 60px;
    }
    ${Media.SM} {
        font-size: 40px;
    }
`;

const Title = css`
    font-size: 20px;
    font-weight: 700;
    color: ${Color.Primary};

    ${Media.MD} {
        font-size: 16px;
    }
    ${Media.SM} {
        font-size: 12px;
    }
`;

export const Typography = {
    Button: Button,
    Time: Time,
    Title: Title,
};
