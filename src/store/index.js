import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';

const store = configureStore({
    reducer:{
        counter:counterReducer,
        auth:authReducer
    }
});



export default store;

// const counterReducer = (prevState = {counter:0,counterVisible:true} ,action) => {
//     const newState = {counter:prevState.counter,counterVisible:prevState.counterVisible}
//     switch(action.type)
//     {
//         case "INCREMENT": 
//            newState.counter = prevState.counter+1;
//            break;
//         case "INCREASE":
//             newState.counter = prevState.counter+action.value;
//             break;
//         case "DECREMENT":
//             newState.counter = prevState.counter-1;
//             break;
//         case "TOGGLE":
//             newState.counterVisible = !prevState.counterVisible;
//         default:
//             newState.counter = prevState.counter;

//     }
//     return newState;
// }

// const store = createStore(counterReducer);


