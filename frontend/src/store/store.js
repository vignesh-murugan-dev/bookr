import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import booksSlice from "./booksSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    books: booksSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store);