import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';
import  {counterActions} from '../store/counterSlice';

const Counter = () => {

  const counter = useSelector(store => store.counter );
  const isCounterVisible = useSelector(store => store.counterVisible);
  const counterDispatch = useDispatch();

  const toggleCounterHandler = () => {
      //counterDispatch({type:"TOGGLE"});
      counterDispatch(counterActions.toggleCounter() );
  };  

  const decreaseHandler = () => {
    // counterDispatch({type:"DECREMENT"});
    counterDispatch(counterActions.decrement() );
  };
  const increaseHandler = () => {
    // counterDispatch({type:"INCREMENT"});
    counterDispatch(counterActions.increment());
  };

  const increaeByHandler = () =>{
    counterDispatch(counterActions.increase(3));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isCounterVisible && <div className={classes.value}>{counter}</div>}
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={increaeByHandler}>Increase by 3</button>
      <button onClick={decreaseHandler}>Decrease</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
