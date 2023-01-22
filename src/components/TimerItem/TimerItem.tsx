import { StyledTimerItem, Time, Title } from "./styles";

interface IProps {
    time: string;
    title: string;
}

export const TimerItem = ({ time, title }: IProps) => {
    return (
        <StyledTimerItem>
            <Time>{time}</Time>
            <Title>{title}</Title>
        </StyledTimerItem>
    );
};
