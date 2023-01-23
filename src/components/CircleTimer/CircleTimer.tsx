import {
    Hour,
    HourArrow,
    Minute,
    MinuteArrow,
    Second,
    SecondArrow,
    StyledCircleTimer,
    SerifsWrapper,
    Serif,
} from "./styles";

interface IProps {
    hours: string;
    minutes: string;
    seconds: string;
}

export const CircleTimer = ({ hours, minutes, seconds }: IProps) => {
    return (
        <StyledCircleTimer>
            <Hour>
                <HourArrow deg={hours}></HourArrow>
            </Hour>
            <Minute>
                <MinuteArrow deg={minutes}></MinuteArrow>
            </Minute>
            <Second>
                <SecondArrow deg={seconds}></SecondArrow>
            </Second>
            <SerifsWrapper>
                <Serif></Serif>
                <Serif></Serif>
                <Serif></Serif>
                <Serif></Serif>
                <Serif></Serif>
                <Serif></Serif>
                <Serif></Serif>
                <Serif></Serif>
                <Serif></Serif>
                <Serif></Serif>
                <Serif></Serif>
                <Serif></Serif>
            </SerifsWrapper>
        </StyledCircleTimer>
    );
};
