import { configureStore } from '@reduxjs/toolkit';
import habitsReducer from './habitslice';
const store = configureStore({
    reducer:{
        allHabits: habitsReducer
    }
})


export default store;