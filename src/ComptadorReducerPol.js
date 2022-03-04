import { useDispatch, useSelector } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
} from "./actions/counterActions";

export default function App() {
  const count = useSelector((store) => store.counterReducer.count);
  const dispatchCounter = useDispatch();

  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatchCounter(increaseCounter(1))}>
        Increase Counter
      </button>
      <button onClick={() => dispatchCounter(increaseCounter(5))}>
        Increase Counter +5
      </button>
      <button onClick={() => dispatchCounter(decreaseCounter(1))}>
        Decrease Counter
      </button>
      <button onClick={() => dispatchCounter(decreaseCounter(5))}>
        Decrease Counter -5
      </button>
      <button onClick={() => dispatchCounter(resetCounter())}>Reset</button>
    </>
  );
}
