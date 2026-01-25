import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
// import { thunk } from "redux-thunk";


const rootReducer = combineReducers({
  
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});


export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
