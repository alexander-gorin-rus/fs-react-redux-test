import { combineReducers, configureStore } from "@reduxjs/toolkit";
import checkReducer from './reducers/GetChecksSlice'

const rootReducer = combineReducers({
    checkReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
