import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});


export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
