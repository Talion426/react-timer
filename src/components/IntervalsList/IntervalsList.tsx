import { IntervalsItem } from "components";
import { getInterval, useAppSelector } from "store";
import { StyledIntervalsList, IntervalsNav, IntervalsBody, NavItem } from "./styles";

export const IntervalsList = () => {
    const { intervals } = useAppSelector(getInterval);

    return (
        <StyledIntervalsList>
            <IntervalsNav>
                <NavItem>Interval</NavItem>
                <NavItem>Interval Time</NavItem>
            </IntervalsNav>
            <IntervalsBody>
                {intervals.map((interval, index) => {
                    let intervalIndex;

                    if (index > 8) {
                        intervalIndex = ++index + "";
                    } else {
                        intervalIndex = `0${++index}`;
                    }

                    return <IntervalsItem interval={intervalIndex} intervalTime={interval.intervalTime} />;
                })}
            </IntervalsBody>
        </StyledIntervalsList>
    );
};
