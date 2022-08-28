import {
  currentName,
  decrement,
  increment,
  PokeCall,
  selectCount
} from "./counterSlice";
import { useAppDispatch, useAppSelectror } from "./hoos";
import "./styles.css";

export default function App() {
  const count = useAppSelectror(selectCount);
  const name = useAppSelectror(currentName);
  const dispatch = useAppDispatch();

  const incrementOnlick = () => {
    dispatch(increment());
  };

  const decrementOnlick = () => {
    dispatch(decrement());
  };

  const thunkButtonClick = () => {
    dispatch(PokeCall(52));
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Current count is {count}</h2>
      <button onClick={() => incrementOnlick()}>Increment</button>
      <button onClick={() => decrementOnlick()}>Decrement</button>
      <br />
      <button onClick={() => thunkButtonClick()}>Thunky Thunk</button>
      <br />
      <br />

      {name != null ? <div>Current Name is {name}</div> : null}
    </div>
  );
}
