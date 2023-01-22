import { Timer } from "components";
import { Wrapper } from "ui";
import { ThemeToggler } from "./components";

export const App = () => {
    return (
        <Wrapper>
            <Timer />
            <ThemeToggler type="checkbox" />
        </Wrapper>
    );
};
