import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IGetChecks } from "../../models/IGetChecks";
import { AppDispatch } from "../store";
import {checksSlice} from './GetChecksSlice'

// export const fetchChecks = () => async (dispatch: AppDispatch) =>  {
//     try {
//         dispatch(checksSlice.actions.checksFetching())
//         const response = await axios.get<IGetChecks[]>('/data.json')
//         dispatch(checksSlice.actions.checksFetchingSuccess(response.data))
//     } catch (e: any) {
//         dispatch(checksSlice.actions.checksFetchingFailure(e.message))
//     }
// }

export const fetchChecks = createAsyncThunk(
    'cheques/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IGetChecks[]>('/datasss.json')
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('Приносим свои извенения, но что-то пошло не так!')
        }
        
    }
)
