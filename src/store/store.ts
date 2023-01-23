import { configureStore } from "@reduxjs/toolkit";
import intervalReducer from "./slices/intervalSlice";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: {
        interval: intervalReducer,
    },
});
