import styled from "styled-components";
import { Color, Media, Typography } from "ui";

export const StyledTimerItem = styled.div`
    overflow: hidden;

    width: 170px;

    text-align: center;

    border: 3px solid ${Color.Quinary};
    border-radius: 10px;

    ${Media.LG} {
        width: 150px;
    }
    ${Media.MD} {
        width: 110px;
    }
    ${Media.SM} {
        width: 80px;
    }
    ${Media.ES} {
        width: 70px;
    }
`;

export const Time = styled.h2`
    padding: 40px 30px;

    ${Typography.Time}

    background: ${Color.Quaternary};

    ${Media.LG} {
        padding: 35px 20px;
    }
    ${Media.MD} {
        padding: 25px 10px;
    }
    ${Media.SM} {
        padding: 15px 10px;
    }
`;

export const Title = styled.h3`
    padding: 15px 0;

    ${Typography.Title}

    background: ${Color.Tertiary};

    ${Media.SM} {
        padding: 10px 0;
    }
`;
