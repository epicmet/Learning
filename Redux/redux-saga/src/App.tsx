import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { ReducersType } from "./store";

function App() {
  const dispatch = useDispatch();

  const count = useSelector<ReducersType, number>((state) => state.main.value);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Useless couter :P</h1>

        <p>count is: {count}</p>
        <p>
          <button type="button" onClick={() => dispatch({ type: "add" })}>
            increase
          </button>

          <span> lll </span>

          <button type="button" onClick={() => dispatch({ type: "sub" })}>
            decrease
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
