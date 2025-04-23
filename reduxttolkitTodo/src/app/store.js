import {configureStore} from "@reduxjs/toolkit"

import todoReducer from "../features/todo/todoSlice"
// store take objects and most of thing taken as a object form 
export const store = configureStore({
    reducer:todoReducer,
})