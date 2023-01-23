import { StyledIntervalsItem, Text } from "./styles";

interface IProps {
    interval: string;
    intervalTime: string;
    fullTime: string;
}

export const IntervalsItem = ({ interval, intervalTime, fullTime }: IProps) => {
    return (
        <StyledIntervalsItem>
            <Text>{interval}</Text>
            <Text>{intervalTime}</Text>
            <Text>{fullTime}</Text>
        </StyledIntervalsItem>
    );
};
