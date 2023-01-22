import { Button } from "components";
import { StyledButtons } from "./styles";

export const Buttons = () => {
    return (
        <StyledButtons>
            <Button>Start</Button>
            <Button>Pause</Button>
            <Button>Interval</Button>
            <Button>Reset</Button>
        </StyledButtons>
    );
};
