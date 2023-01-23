import { Button } from "components";
import { StyledButtons } from "./styles";

interface IProps {
    startTimer: () => void;
    pauseTimer: () => void;
    intervalTimer: () => void;
    resetTimer: () => void;
}

export const Buttons = ({ startTimer, pauseTimer, intervalTimer, resetTimer }: IProps) => {
    return (
        <StyledButtons>
            <Button onClick={startTimer}>Start</Button>
            <Button onClick={pauseTimer}>Pause</Button>
            <Button onClick={intervalTimer}>Interval</Button>
            <Button onClick={resetTimer}>Reset</Button>
        </StyledButtons>
    );
};
