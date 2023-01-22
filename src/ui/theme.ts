import { css } from "styled-components";

const Dark = css`
    --primary: #ffffff;
    --primary-bg: #313037;
    --secondary-bg: #fc857f;
`;

const Light = css`
    --primary: #313037;
    --primary-bg: #ffffff;
    --secondary-bg: #d7e4fd;
`;

export const Theme = {
    Light: Light,
    Dark: Dark,
};
