import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { chequeApi } from "../services/ChequesService";
import checkReducer from './reducers/GetChecksSlice'

const rootReducer = combineReducers({
    checkReducer,
    [chequeApi.reducerPath]: chequeApi.reducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(chequeApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
