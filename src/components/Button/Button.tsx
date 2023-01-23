import { StyledButton } from "./styles";

interface IProps {
    children: string;
    onClick?: (event: React.MouseEvent) => void;
}

export const Button = (props: IProps) => {
    return <StyledButton {...props}>{props.children}</StyledButton>;
};
