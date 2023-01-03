import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counter from "./counterSlice";

const persistConfig = {
  key: "root",
  storage, // localStorage에 저장.
};

const rootReducer = persistReducer(persistConfig, counter);
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
