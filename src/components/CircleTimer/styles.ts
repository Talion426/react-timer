import styled from "styled-components";
import { Color } from "ui";

export const StyledCircleTimer = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 300px;
    margin-bottom: 30px;

    background: none;
    background-size: cover;
    border: 4px solid ${Color.Tertiary};
    border-radius: 50%;
    box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05), inset 0 -15px 15px rgba(255, 255, 255, 0.05),
        0 15px 15px rgba(0, 0, 0, 0.3), inset 0 15px 15px rgba(0, 0, 0, 0.3);

    &::before {
        content: "";
        position: absolute;
        z-index: 15;

        width: 15px;
        height: 15px;

        background: ${Color.Tertiary};
        border-radius: 50%;
    }
`;

export const Hour = styled.div`
    position: absolute;

    width: 160px;
    height: 160px;
`;

export const Minute = styled.div`
    position: absolute;

    width: 190px;
    height: 190px;
`;

export const Second = styled.div`
    position: absolute;

    width: 230px;
    height: 230px;
`;

export const HourArrow = styled.div<{ deg: string }>`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 160px;
    height: 160px;

    border-radius: 50%;

    &::before {
        content: "";

        position: absolute;
        top: calc(50% - 70px);
        z-index: 10;

        width: 8px;
        height: 70px;

        background: ${Color.Secondary};
        border-radius: 6px 6px 0 0;

        transform-origin: 50% 100%;
        transform: ${({ deg }) => `rotate(${+deg * 6}deg)` || `rotate(0)`};
    }
`;

export const MinuteArrow = styled.div<{ deg: string }>`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 190px;
    height: 190px;

    border-radius: 50%;

    &::before {
        content: "";

        position: absolute;
        top: calc(50% - 90px);
        z-index: 11;

        width: 4px;
        height: 90px;

        background: ${Color.Quaternary};
        border-radius: 6px 6px 0 0;

        transform-origin: 50% 100%;
        transform: ${({ deg }) => `rotate(${+deg * 6}deg)` || `rotate(0)`};
    }
`;

export const SecondArrow = styled.div<{ deg: string }>`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 230px;
    height: 230px;

    border-radius: 50%;

    &::before {
        content: "";

        position: absolute;
        top: calc(50% - 120px);
        z-index: 12;

        width: 2px;
        height: 150px;

        background: ${Color.Quinary};
        border-radius: 6px 6px 0 0;

        transform-origin: 50% 80%;
        transform: ${({ deg }) => `rotate(${+deg * 6}deg)` || `rotate(0)`};
    }
`;

export const SerifsWrapper = styled.div``;

export const Serif = styled.div`
    position: absolute;

    width: 5px;
    height: 15px;

    background: ${Color.Tertiary};
    box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05), inset 0 -15px 15px rgba(255, 255, 255, 0.05),
        0 15px 15px rgba(0, 0, 0, 0.3), inset 0 15px 15px rgba(0, 0, 0, 0.3);

    &:nth-child(1) {
        top: 5px;
        left: calc(50% - 2.5px);
    }
    &:nth-child(2) {
        bottom: 5px;
        left: calc(50% - 2.5px);
    }
    &:nth-child(3) {
        top: calc(50% - 7.5px);
        left: 10px;

        transform: rotate(-90deg);
    }
    &:nth-child(4) {
        top: calc(50% - 7.5px);
        right: 10px;

        transform: rotate(90deg);
    }
    &:nth-child(5) {
        top: calc(14.3% - 17px);
        left: calc(28.6% - 10px);

        transform: rotate(-30deg);
    }
    &:nth-child(6) {
        top: calc(14.3% - 17px);
        right: calc(28.6% - 10px);

        transform: rotate(30deg);
    }
    &:nth-child(7) {
        top: calc(28.6% - 10px);
        left: calc(14.3% - 17px);

        transform: rotate(-60deg);
    }
    &:nth-child(8) {
        top: calc(28.6% - 10px);
        right: calc(14.3% - 17px);

        transform: rotate(60deg);
    }
    &:nth-child(9) {
        bottom: calc(14.3% - 17px);
        left: calc(28.6% - 10px);

        transform: rotate(30deg);
    }
    &:nth-child(10) {
        bottom: calc(14.3% - 17px);
        right: calc(28.6% - 10px);

        transform: rotate(-30deg);
    }
    &:nth-child(11) {
        bottom: calc(28.6% - 10px);
        left: calc(14.3% - 17px);

        transform: rotate(60deg);
    }
    &:nth-child(12) {
        bottom: calc(28.6% - 10px);
        right: calc(14.3% - 17px);

        transform: rotate(-60deg);
    }
`;
