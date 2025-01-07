import { combineReducers } from "@reduxjs/toolkit";
import countSlice from "./slices/count";

const rootReducer = combineReducers({
    count: countSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
