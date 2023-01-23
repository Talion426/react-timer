import { StyledIntervalsItem, Text } from "./styles";

interface IProps {
    interval: string;
    intervalTime: string;
}

export const IntervalsItem = ({ interval, intervalTime }: IProps) => {
    return (
        <StyledIntervalsItem>
            <Text>{interval}</Text>
            <Text>{intervalTime}</Text>
        </StyledIntervalsItem>
    );
};
