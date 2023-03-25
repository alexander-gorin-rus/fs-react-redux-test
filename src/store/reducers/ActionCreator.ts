import axios from "axios";
import { IGetChecks } from "../../models/IGetChecks";
import { AppDispatch } from "../store";
import {checksSlice} from './GetChecksSlice'

export const fetchChecks = () => async (dispatch: AppDispatch) =>  {
    try {
        dispatch(checksSlice.actions.checksFetching())
        const response = await axios.get<IGetChecks[]>('/data.json')
        dispatch(checksSlice.actions.checksFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(checksSlice.actions.checksFetchingFailure(e.message))
    }
}
