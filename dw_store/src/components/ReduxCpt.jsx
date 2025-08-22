import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../features/counterSlice";
 
export const ReduxCpt = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
 
  const incrementCount = () => {
    dispatch(increment());
  };

  const incrementBy10 = () =>{
    dispatch(incrementByAmount(10));
  };
 
  return (
    <>
      <h1>Compteur Redux</h1>
      <p className="flex w-fit m-auto">Compteur : {count}</p>
      <div className="flex w-fit m-auto">
        <button onClick={incrementCount} className="btn btn-primary ml-2">
        +
        </button>
        <button onClick={() => dispatch(decrement())} className="btn btn-primary ml-2">
          -
        </button>
        <button onClick={incrementBy10} className="btn btn-primary ml-2"> +10 </button>
      </div>      
    </>
  );
};