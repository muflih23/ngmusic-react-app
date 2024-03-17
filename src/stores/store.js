import storage from "redux-persist/lib/storage"
import { combineReducers } from "redux"
import { persistReducer, persistStore } from "redux-persist"
import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"

import search from "./search/reducers"
import persisted from "./persisted/reducers"

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["persisted"]
}

const rootReducer = combineReducers({
    search,
    persisted,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);