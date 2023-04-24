import { useSelector, useDispatch } from "react-redux";
import {increment,decrement,reset} from "./redux/features/counterSlice";
import Styled from "./Counter.module.css"
function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  return (
     <div className={Styled.container}>
        <div className={Styled.cardContainer}>
         <h1 className={Styled.heading}> Counter App </h1>
       

        <div className={Styled.count}>
            <h1>{counter}</h1>
         </div>
          
      <div className={Styled.btnContainer}>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(reset())}> Reset</button>
     </div>
     </div>
    </div>
  );
}

export default Counter;