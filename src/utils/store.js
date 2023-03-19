import { configureStore, createSlice } from "@reduxjs/toolkit";

const useSlice = createSlice({
    name: "route",
    initialState: {},
    reducer: {

    }
})


export const store = configureStore({
    reducer: {
        route: useSlice.reducer
    }

})