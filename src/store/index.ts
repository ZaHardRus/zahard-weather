import {applyMiddleware, combineReducers, configureStore} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {TypedUseSelectorHook, useDispatch} from "react-redux";
import { weatherReducer } from "./ducks/weather/slice";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    weather:weatherReducer
})
export const store = configureStore({
    reducer: rootReducer,
    middleware:getDefaultMiddleware => getDefaultMiddleware({})
})


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

