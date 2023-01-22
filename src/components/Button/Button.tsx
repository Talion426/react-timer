import { StyledButton } from "./styles";

interface IProps {
    children: string;
}

export const Button = ({ children }: IProps) => {
    return <StyledButton type="button">{children}</StyledButton>;
};
