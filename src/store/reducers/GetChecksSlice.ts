import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetChecks } from "../../models/IGetChecks";
import { fetchChecks } from "./ActionCreator";


interface ICheckState {
    checks: IGetChecks[];
    isLoading: boolean;
    error: string;
}
 
const initialState: ICheckState = {
    checks: [],
    isLoading: false,
    error: ''
}

export const checksSlice = createSlice({
    name: 'check',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchChecks.fulfilled.type]: (state, action: PayloadAction<IGetChecks[]>) => {
            state.checks = action.payload;
            state.isLoading = false;
            state.error = ''
        },
        [fetchChecks.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchChecks.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
});

export default checksSlice.reducer;
