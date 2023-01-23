import { Buttons, CircleTimer, IntervalsList, TimerList } from "components";
import { useState } from "react";
import { Navigation, NavItem, StyledTimer } from "./styles";

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
    const [isCircle, setCircle] = useState(false);

    const handleCircle = () => {
        setCircle(true);
    };

    const handleList = () => {
        setCircle(false);
    };

    return (
        <StyledTimer>
            <Navigation>
                <NavItem onClick={handleCircle} active={isCircle}>
                    Circle Timer
                </NavItem>
                <NavItem onClick={handleList} active={!isCircle}>
                    Timer List
                </NavItem>
            </Navigation>
            {isCircle ? (
                <CircleTimer hours={hours} minutes={minutes} seconds={seconds} />
            ) : (
                <TimerList hours={hours} minutes={minutes} seconds={seconds} milliseconds={milliseconds} />
            )}
            <IntervalsList />
            <Buttons
                startTimer={startTimer}
                pauseTimer={pauseTimer}
                intervalTimer={intervalTimer}
                resetTimer={resetTimer}
            />
        </StyledTimer>
    );
};
