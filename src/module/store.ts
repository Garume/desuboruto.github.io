import { configureStore } from "@reduxjs/toolkit";
import threeDReducer from "@src/module/features/3d/threeDSlice"

export const store = configureStore({
    reducer:{
        threeD:threeDReducer,
    },
    devTools:process.env.NODE_ENV !== "production"
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>