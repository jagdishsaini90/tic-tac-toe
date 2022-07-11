import "./App.css";
import Canvas from "./components/canvas";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <h1 className="tic_tac_toe_Heading text-9xl font-bold text-purple">
        Tic-Tac-Toe
      </h1>
      <Canvas />
      <ToastContainer />
    </div>
  );
}

export default App;
