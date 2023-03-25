import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetChecks } from "../../models/IGetChecks";


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
    reducers: {
        checksFetching(state) {
            state.isLoading = true;
        },
        checksFetchingSuccess(state, action: PayloadAction<IGetChecks[]>) {
            state.isLoading = false;
            state.error = '';
            state.checks = action.payload
            
        },
        checksFetchingFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        }
    }
});

export default checksSlice.reducer;
