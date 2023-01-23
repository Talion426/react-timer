import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { getInterval } from "./selectors/intervalSelector";
import { addInterval, deleteIntervals } from "./slices/intervalSlice";
import { store } from "./store";

export { store, useAppDispatch, useAppSelector, getInterval, addInterval, deleteIntervals };
