import { IntervalsItem } from "components";
import { StyledIntervalsList, IntervalsNav, IntervalsBody, NavItem } from "./styles";

export const IntervalsList = () => {
    return (
        <StyledIntervalsList>
            <IntervalsNav>
                <NavItem>Interval</NavItem>
                <NavItem>Interval Time</NavItem>
                <NavItem>Full Time</NavItem>
            </IntervalsNav>
            <IntervalsBody>
                <IntervalsItem interval="01" intervalTime="00:00:00:00" fullTime="00:00:00:00" />
                <IntervalsItem interval="01" intervalTime="00:00:00:00" fullTime="00:00:00:00" />
                <IntervalsItem interval="01" intervalTime="00:00:00:00" fullTime="00:00:00:00" />
                <IntervalsItem interval="01" intervalTime="00:00:00:00" fullTime="00:00:00:00" />
                <IntervalsItem interval="01" intervalTime="00:00:00:00" fullTime="00:00:00:00" />
            </IntervalsBody>
        </StyledIntervalsList>
    );
};
