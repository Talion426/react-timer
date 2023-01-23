import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IIntervalItem } from "types";

interface IInterval {
    intervals: IIntervalItem[];
}

const initialState: IInterval = {
    intervals: [],
};

const intervalSlice = createSlice({
    name: "intervals",
    initialState,
    reducers: {
        addInterval: (state, { payload }: PayloadAction<IIntervalItem>) => {
            state.intervals.push({
                ...payload,
            });
        },

        deleteIntervals: (state) => {
            state.intervals = [];
        },
    },
});

export const { addInterval, deleteIntervals } = intervalSlice.actions;

export default intervalSlice.reducer;
