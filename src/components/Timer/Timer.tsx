import { Buttons, TimerList } from "components";
import { StyledTimer } from "./styles";

export const Timer = () => {
    return (
        <StyledTimer>
            <TimerList />
            <Buttons />
        </StyledTimer>
    );
};
