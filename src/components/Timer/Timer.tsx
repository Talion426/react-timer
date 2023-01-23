import { Buttons, TimerList } from "components";
import { StyledTimer } from "./styles";

interface IProps {
    hours: string;
    minutes: string;
    seconds: string;
    milliseconds: string;
    startTimer: () => void;
    pauseTimer: () => void;
    intervalTimer: () => void;
    resetTimer: () => void;
}

export const Timer = ({
    hours,
    minutes,
    seconds,
    milliseconds,
    startTimer,
    pauseTimer,
    intervalTimer,
    resetTimer,
}: IProps) => {
    return (
        <StyledTimer>
            <TimerList hours={hours} minutes={minutes} seconds={seconds} milliseconds={milliseconds} />
            <Buttons
                startTimer={startTimer}
                pauseTimer={pauseTimer}
                intervalTimer={intervalTimer}
                resetTimer={resetTimer}
            />
        </StyledTimer>
    );
};
