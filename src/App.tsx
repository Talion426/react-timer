import { Timer } from "components";
import { useState } from "react";
import { useAppDispatch, addInterval, deleteIntervals } from "store";
import { Wrapper } from "ui";
import { ThemeToggler } from "./components";

export const App = () => {
    const dispatch = useAppDispatch();

    let hour = 0;
    let minute = 0;
    let second = 0;
    let millisecond = 0;

    const [millisecondsElement, setMillisecondsElement] = useState<string>("00");
    const [secondsElement, setSecondsElement] = useState<string>("00");
    const [minutesElement, setMinutesElement] = useState<string>("00");
    const [hoursElement, setHoursElement] = useState<string>("00");
    const [intervalElement, setIntervalElement] = useState<any>();

    const handleStartTimer = () => {
        clearInterval(intervalElement);
        dispatch(deleteIntervals());
        setIntervalElement(setInterval(startTimer, 10));
    };

    const handlePauseTimer = () => {
        clearInterval(intervalElement);
    };

    const handleIntervalTimer = () => {
        const intervalTime = `${hoursElement}:${minutesElement}:${secondsElement}:${millisecondsElement}`;

        dispatch(
            addInterval({
                intervalTime,
            })
        );
    };

    const handleResetTimer = () => {
        clearInterval(intervalElement);
        dispatch(deleteIntervals());

        hour = 0;
        minute = 0;
        second = 0;
        millisecond = 0;
        setHoursElement("00");
        setMinutesElement("00");
        setSecondsElement("00");
        setMillisecondsElement("00");
    };

    const startTimer = () => {
        millisecond++;

        if (millisecond < 9) {
            setMillisecondsElement(`0${millisecond}`);
        }
        if (millisecond > 9) {
            setMillisecondsElement(`${millisecond}`);
        }
        if (millisecond > 99) {
            second++;
            setSecondsElement(`0${second}`);
            millisecond = 0;
            setMillisecondsElement(`0${millisecond}`);
        }

        if (second < 9) {
            setSecondsElement(`0${second}`);
        }
        if (second > 9) {
            setSecondsElement(`${second}`);
        }
        if (second > 59) {
            minute++;
            setMinutesElement(`0${minute}`);
            second = 0;
            setSecondsElement(`0${second}`);
        }

        if (minute < 9) {
            setMinutesElement(`0${minute}`);
        }
        if (minute > 9) {
            setMinutesElement(`${minute}`);
        }
        if (minute > 59) {
            hour++;
            setHoursElement(`0${hour}`);
            minute = 0;
            setMinutesElement(`0${minute}`);
        }
    };

    return (
        <Wrapper>
            <Timer
                hours={hoursElement}
                minutes={minutesElement}
                seconds={secondsElement}
                milliseconds={millisecondsElement}
                startTimer={handleStartTimer}
                pauseTimer={handlePauseTimer}
                intervalTimer={handleIntervalTimer}
                resetTimer={handleResetTimer}
            />
            <ThemeToggler type="checkbox" />
        </Wrapper>
    );
};
