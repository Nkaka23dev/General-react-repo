import { configureStore, createSlice } from "@reduxjs/toolkit";

export const counterSlider = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increase: state => state + 1,
        decrease: state => state - 1,
        reset: state => state = initialState
    }
})

export const { increase, decrease } = counterSlider.actions

export const store = configureStore({
    reducer: {
        counter: counterSlider.reducer
    }
}) 