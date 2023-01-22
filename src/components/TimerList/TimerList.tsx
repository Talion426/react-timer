import { TimerItem } from "components";
import { StyledTimerList } from "./styles";

export const TimerList = () => {
    return (
        <StyledTimerList>
            <TimerItem time="00" title="Hours" />
            <TimerItem time="00" title="Minutes" />
            <TimerItem time="00" title="Seconds" />
            <TimerItem time="00" title="Milliseconds" />
        </StyledTimerList>
    );
};
