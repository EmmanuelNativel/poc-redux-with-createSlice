import "./App.css";
import { ActionCreators as UndoActionCreators } from "redux-undo";
import { useAppDispatch } from "./app/hooks";
import { Dashboard } from "./features/dashboard/Dashboard";

function App() {
  const dispatch = useAppDispatch();

  const undo = () => {
    dispatch(UndoActionCreators.undo());
  };

  const redo = () => {
    dispatch(UndoActionCreators.redo());
  };
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "120px",
          margin: "16px auto",
        }}
      >
        <button onClick={undo}>UNDO</button>
        <button onClick={redo}>REDO</button>
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
