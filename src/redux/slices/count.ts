import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        onIncrement(state) {
            state.count = state.count + 1;
        },
        onDecrease(state) {
            state.count = state.count - 1;
        },
        onReset(state) {
            state.count = 0;
        },
    },
    extraReducers: () => {},
});

export const { onIncrement, onDecrease, onReset } = countSlice.actions;

export default countSlice;
