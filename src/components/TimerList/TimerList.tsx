import { TimerItem } from "components";
import { StyledTimerList } from "./styles";

interface IProps {
    hours: string;
    minutes: string;
    seconds: string;
    milliseconds: string;
}

export const TimerList = ({ hours, minutes, seconds, milliseconds }: IProps) => {
    return (
        <StyledTimerList>
            <TimerItem time={hours} title="Hours" />
            <TimerItem time={minutes} title="Minutes" />
            <TimerItem time={seconds} title="Seconds" />
            <TimerItem time={milliseconds} title="Milliseconds" />
        </StyledTimerList>
    );
};
