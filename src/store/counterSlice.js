import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name:'counter',
    initialState: {counter:0,counterVisible:true},
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action)
        {
            state.counter+=action.payload;
        },
        toggleCounter(state)
        {
            state.counterVisible=!state.counterVisible;
        }
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;